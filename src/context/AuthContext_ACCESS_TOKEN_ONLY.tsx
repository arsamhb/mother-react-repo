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
import { jwtDecode } from 'jwt-decode';
import { refreshTokens } from '@/lib/axiosInstance';

interface IAuthContext {
  isAuthenticated: boolean;
  token: string | null;
  initializing: boolean;
  login: (accessToken: string, refreshToken?: string) => void;
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
  const scheduleRefreshRef = useRef<(accessToken: string) => void>(() => {});

  const logout = useCallback(() => {
    authService.clearSession();
    if (refreshTimer.current) clearTimeout(refreshTimer.current);
    router.push('/auth');
  }, [router]);

  scheduleRefreshRef.current = (accessToken: string) => {
    // Only schedule if a refresh token exists — otherwise nothing to refresh with
    if (!authService.getRefreshToken()) return;

    if (refreshTimer.current) clearTimeout(refreshTimer.current);

    try {
      const decoded = jwtDecode<{ exp: number }>(accessToken);
      const expiresInMs = decoded.exp * 1000 - Date.now();
      const refreshInMs = expiresInMs - 60 * 1000;

      if (refreshInMs <= 0) {
        refreshTokens()
          .then((newToken) => scheduleRefreshRef.current(newToken))
          .catch(() => logout());
        return;
      }

      refreshTimer.current = setTimeout(() => {
        refreshTokens()
          .then((newToken) => scheduleRefreshRef.current(newToken))
          .catch(() => logout());
      }, refreshInMs);
    } catch {
      // malformed token — reactive interceptor will handle it
    }
  };

  const login = useCallback((accessToken: string, refreshToken?: string) => {
    authService.setSession(accessToken, refreshToken);
    // scheduleRefreshRef guards internally — safe to call always
    scheduleRefreshRef.current(accessToken);
  }, []);

  const handleAuthError = useCallback(() => logout(), [logout]);

  // Sync with authService + restore session on mount
  useEffect(() => {
    const stored = authService.getToken();
    if (stored) {
      setToken(stored);
      // scheduleRefreshRef will no-op if no refresh token stored
      scheduleRefreshRef.current(stored);
    }
    setInitializing(false);

    const handleAuthChange = (newToken: string | null) => {
      setToken(newToken);
      // re-sync the proactive timer whenever the token changes from any source
      if (newToken) scheduleRefreshRef.current(newToken);
    };
    const unsubscribe = authService.subscribe(handleAuthChange);
    return unsubscribe;
  }, []);

  // Cross-tab storage sync
  useEffect(() => {
    function handleStorage(e: StorageEvent) {
      if (e.key !== TOKEN_KEY) return;
      if (e.newValue) {
        authService.setToken(e.newValue);
        // scheduleRefreshRef will no-op if no refresh token stored
        scheduleRefreshRef.current(e.newValue);
      } else {
        logout();
      }
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [logout]);

  // Global auth error (fired by axiosInstance on unrecoverable 401)
  useEffect(() => {
    window.addEventListener('auth:error', handleAuthError);
    return () => window.removeEventListener('auth:error', handleAuthError);
  }, [handleAuthError]);

  // LOGIN BY THE TOKEN THAT GIVEN FROM BACK-END (ONE-TIME READ)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const authToken = urlParams.get('auth');

      if (authToken) {
        login(authToken);
        // Clean up URL
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, []);
  const authValue = useMemo(
    () => ({ isAuthenticated: !!token, token, initializing, login, logout }),
    [token, initializing, login, logout]
  );

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
