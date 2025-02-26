'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { tokenPersister } from '@/lib/persisters/tokenPersister';

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
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = tokenPersister.get();
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (token: string) => {
    tokenPersister.set(token);
    setToken(token);
  };

  const logout = () => {
    tokenPersister.delete();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!token, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
