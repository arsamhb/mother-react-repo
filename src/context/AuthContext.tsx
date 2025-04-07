'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import authService from '@/lib/auth/authService';

interface IAuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  initializing: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContextType>({
  isAuthenticated: false,
  token: null,
  initializing: true,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(authService.getToken());
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const handleAuthChange = (newToken: string | null) => {
      setToken(newToken);
      setInitializing(false);
    };

    if (authService.getToken()) {
      setInitializing(false);
    }

    authService.subscribe(handleAuthChange);
    return () => authService.unsubscribe(handleAuthChange);
  }, []);

  const login = (newToken: string) => {
    authService.setToken(newToken);
  };

  const logout = () => {
    authService.deleteToken();
  };

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
