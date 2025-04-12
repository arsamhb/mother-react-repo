'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axiosInstance';
import { useAuth } from '@/context/AuthContext_ACCESS_TOKEN_ONLY';

export interface CustomErrorResponseSchema {
  message: string;
  statusCode: number;
}

interface WithAuthOptions {
  redirectPath?: string;
}

const withAuth = (options?: WithAuthOptions) => {
  const { redirectPath = '/' } = options ?? {};

  return function <P extends object>(WrappedComponent: React.ComponentType<P>) {
    return function ComponentWithAuth(props: any) {
      const router = useRouter();
      const { token, initializing, logout } = useAuth();

      const { error, isFetching } = useQuery<any, CustomErrorResponseSchema>({
        queryKey: ['authTokenCheck'],
        queryFn: api.post('SOME_ROUTE_TO_BE_IMPORTED'),
        enabled: !!token && !initializing,
        refetchOnMount: true,
      });

      useEffect(() => {
        if (error?.statusCode === 401) {
          logout();
        }
      }, [error, logout]);

      useEffect(() => {
        if (!initializing && !token) {
          router.push(redirectPath);
        }
      }, [token, initializing, router, redirectPath]);

      if (initializing || isFetching) {
        return (
          <div className="flex flex-col gap-lg m-auto items-center">
            <h3 className="text-2xl">در حال دریافت اطلاعات کاربر</h3>
            <span className="loading loading-dots loading-lg"></span>
          </div>
        );
      }

      return <WrappedComponent {...props} />;
    };
  };
};

export default withAuth;
