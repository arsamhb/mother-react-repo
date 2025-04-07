'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axiosInstance';
// import { AUTH_TOKEN_VERIFY_ROUTE } from '@/app/auth/_service/route.api';
import authService from '@/lib/auth/authService';

export interface CustomErrorResponseSchema {
  message: string;
  statusCode: number;
}

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return function ComponentWithAuth(props: any) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string | null>(null);

    // Subscribe to token changes
    useEffect(() => {
      setToken(authService.getToken());

      const handleTokenChange = (newToken: string | null) => {
        setToken(newToken);
      };

      authService.subscribe(handleTokenChange);
      return () => authService.unsubscribe(handleTokenChange);
    }, []);

    // CHANGE THIS ROUTE WITH SOMETHING RELATED AND REMOVE THE LINE BELOW
    const AUTH_TOKEN_VERIFY_ROUTE = '';
    const { error, isError } = useQuery<any, CustomErrorResponseSchema>({
      queryKey: ['tokenCheck'],
      queryFn: () => api.post(AUTH_TOKEN_VERIFY_ROUTE),
      enabled: !!token,
    });

    useEffect(() => {
      if (error?.statusCode === 401) {
        authService.deleteToken();
      }
    }, [error, isError]);

    useEffect(() => {
      if (!token) {
        router.push('/');
      } else {
        setLoading(false);
      }
    }, [token, router]);

    if (loading) {
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
