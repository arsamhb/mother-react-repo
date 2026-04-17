'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import authService from '@/lib/auth/authService_ACCESS_TOKEN_ONLY';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { isRefreshing, setIsRefreshing, processQueue } from '@/lib/axiosInstance';
// import { ADMIN_REFRESH_ROUTE } from '@/app/auth/_service/route.api';
const ADMIN_REFRESH_ROUTE = '/';
interface IAuthContext {
  isAuthenticated: boolean;
  token: string | null;
  initializing: boolean;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  token: null,
  initializing: true,
  login: () => {},
  logout: () => {},
});

const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY_NAME ?? 'access';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(true);
  const router = useRouter();
  const refreshTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const silentRefreshRef = useRef<() => Promise<void>>(async () => {});
  const scheduleRefreshRef = useRef<(accessToken: string) => void>(() => {});

  const logout = useCallback(() => {
    authService.clearSession();
    if (refreshTimer.current) clearTimeout(refreshTimer.current);
    router.push('/auth');
  }, [router]);

  scheduleRefreshRef.current = (accessToken: string) => {
    if (refreshTimer.current) clearTimeout(refreshTimer.current);
    try {
      const decoded = jwtDecode<{ exp: number }>(accessToken);
      const expiresInMs = decoded.exp * 1000 - Date.now();
      const refreshInMs = expiresInMs - 60 * 1000; // 1 min before expiry

      if (refreshInMs <= 0) {
        silentRefreshRef.current();
        return;
      }

      refreshTimer.current = setTimeout(() => {
        silentRefreshRef.current();
      }, refreshInMs);
    } catch {
      // malformed token — reactive interceptor will handle it
    }
  };

  silentRefreshRef.current = async () => {
    if (isRefreshing) return;

    const refreshToken = authService.getRefreshToken();
    if (!refreshToken) {
      logout();
      return;
    }

    setIsRefreshing(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${ADMIN_REFRESH_ROUTE}`,
        { refreshToken }
      );
      const newAccessToken = response.data.accessToken;
      const newRefreshToken = response.data.refreshToken ?? refreshToken;

      authService.setSession(newAccessToken, newRefreshToken);
      processQueue(null, newAccessToken);
      scheduleRefreshRef.current(newAccessToken);
    } catch {
      processQueue(null, null);
      logout();
    } finally {
      setIsRefreshing(false);
    }
  };

  const login = useCallback((accessToken: string, refreshToken: string) => {
    authService.setSession(accessToken, refreshToken);
    scheduleRefreshRef.current(accessToken);
  }, []);

  const handleAuthError = useCallback(() => logout(), [logout]);

  // Sync with authService + restore session on mount
  useEffect(() => {
    const stored = authService.getToken();
    if (stored) {
      setToken(stored);
      scheduleRefreshRef.current(stored);
    }
    setInitializing(false);

    const handleAuthChange = (newToken: string | null) => setToken(newToken);
    authService.subscribe(handleAuthChange);
    return () => authService.unsubscribe(handleAuthChange);
  }, []);

  // Cross-tab storage sync
  useEffect(() => {
    function handleStorage(e: StorageEvent) {
      if (e.key !== TOKEN_KEY) return;
      if (e.newValue) {
        authService.setToken(e.newValue);
        scheduleRefreshRef.current(e.newValue);
      } else {
        logout();
      }
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [logout]);

  useEffect(() => {
    window.addEventListener('auth:error', handleAuthError);
    return () => window.removeEventListener('auth:error', handleAuthError);
  }, [handleAuthError]);

  const authValue = useMemo(
    () => ({ isAuthenticated: !!token, token, initializing, login, logout }),
    [token, initializing, login, logout]
  );

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
