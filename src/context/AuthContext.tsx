'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import authService from '@/lib/auth/authService';

interface IAuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContextType>({
  isAuthenticated: false,
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(authService.getToken());

  useEffect(() => {
    const handleAuthChange = (newToken: string | null) => {
      setToken(newToken);
    };
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
      login,
      logout,
    }),
    [token]
  );

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
