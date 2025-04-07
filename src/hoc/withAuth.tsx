'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axiosInstance';
// import { AUTH_TOKEN_VERIFY_ROUTE } from '@/app/auth/_service/route.api';
import { useAuth } from '@/context/AuthContext';

export interface CustomErrorResponseSchema {
  message: string;
  statusCode: number;
}

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return function ComponentWithAuth(props: any) {
    const router = useRouter();
    const { token, initializing, logout } = useAuth();
    // CHANGE IT LATER
    const AUTH_TOKEN_VERIFY_ROUTE = '';
    const { error } = useQuery<any, CustomErrorResponseSchema>({
      queryKey: ['tokenCheck'],
      queryFn: () => api.post(AUTH_TOKEN_VERIFY_ROUTE),
      enabled: !!token,
    });

    useEffect(() => {
      if (error?.statusCode === 401) {
        logout();
      }
    }, [error, logout]);

    useEffect(() => {
      if (!initializing && !token) {
        router.push('/');
      }
    }, [token, initializing, router]);

    if (initializing) {
      return (
        <div className="flex flex-col gap-lg m-auto items-center">
          <h3 className="text-2xl">در حال بارگذاری محتوا</h3>
          <span className="loading loading-dots loading-lg "></span>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
