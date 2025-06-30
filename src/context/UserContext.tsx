'use client';

import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axiosInstance';
import { IUserInfo } from '@/app/user/_service/interface.schema';
import { useAuth } from './AuthContext_ACCESS_TOKEN_ONLY';
import { USER_ROUTE } from '@/app/user/_service/route.api';

interface IUserContext {
  user: IUserInfo | null;
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
  skipProfileFetch: (shouldSkip: boolean) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated, token } = useAuth();
  const [shouldSkipProfileFetch, setShouldSkipProfileFetch] = useState(false);

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery<IUserInfo, Error>({
    queryKey: ['userProfile', token],
    queryFn: api.get<IUserInfo>(USER_ROUTE),
    enabled: isAuthenticated && !shouldSkipProfileFetch,
    // retry: false, //CHECK ON THIS
    // staleTime: Infinity, //CHECK ON THIS
  });

  const skipProfileFetch = (shouldSkip: boolean) => {
    setShouldSkipProfileFetch(shouldSkip);
  };

  return (
    <UserContext.Provider
      value={{ user: user ?? null, isLoading, error, refetch, skipProfileFetch }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUser = (): IUserContext => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
