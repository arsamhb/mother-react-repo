'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import authService from '@/lib/auth/authService_ACCESS_TOKEN_ONLY';

interface IAuthContext {
  isAuthenticated: boolean;
  token: string | null;
  initializing: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  token: null,
  initializing: true,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(true);

  const login = (newToken: string) => {
    authService.setToken(newToken);
  };

  const logout = () => {
    authService.deleteToken();
  };

  // SET UP THE LOGIC BETWEEN AUTH CONTEXT AND AUTH SERVICE
  useEffect(() => {
    const savedToken = authService.getToken();
    setToken(savedToken);
    setInitializing(false);

    const handleAuthChange = (newToken: string | null) => {
      setToken(newToken);
    };

    authService.subscribe(handleAuthChange);
    return () => authService.unsubscribe(handleAuthChange);
  }, []);

  // TO CHECK THE VALIDITY OF THE TOKEN ON APPLICATION INITIALIZATION
  useEffect(() => {
    if (authService.getToken()) {
      // const checkTokenOnAppInit = api.post('SOME_ROUTE_TO_BE_IMPORTED');
      // checkTokenOnAppInit({}).catch((err) => {
      //   if (err.statusCode === 401) {
      //     logout();
      //   }
      // });
    }
  }, []);

  // SET UP THE EVENT LISTENER FOR UNAUTHORIZED RESPONSES
  useEffect(() => {
    function handleAuthError() {
      logout();
    }

    window.addEventListener('auth:error', handleAuthError);
    return () => {
      window.removeEventListener('auth:error', handleAuthError);
    };
  }, [logout]);

  const authValue = useMemo(
    () => ({
      isAuthenticated: !!token,
      token,
      initializing,
      login,
      logout,
    }),
    [token, initializing]
  );

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
