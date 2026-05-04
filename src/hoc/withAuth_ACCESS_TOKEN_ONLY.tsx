'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
      const { token, initializing, isAuthenticated } = useAuth();

      useEffect(() => {
        if (!isAuthenticated && !initializing && !token) {
          sessionStorage.setItem(
            'redirectAfterLogin',
            window.location.pathname + window.location.search
          );
          router.replace(redirectPath);
        }
      }, [token, initializing, redirectPath, isAuthenticated]);

      if (initializing) {
        return (
          <div className="flex flex-col gap-lg m-auto h-screen justify-center items-center">
            <h3 className="text-2xl">در حال دریافت اطلاعات کاربر</h3>
            <span className="loading loading-infinity loading-xl text-primary"></span>
          </div>
        );
      }

      if (!isAuthenticated) {
        return (
          <div className="flex flex-col gap-lg m-auto h-screen justify-center items-center">
            <h3 className="text-2xl">در حال انتقال ...</h3>
            <span className="loading loading-infinity loading-xl text-primary"></span>
          </div>
        );
      }

      return <WrappedComponent {...props} />;
    };
  };
};

export default withAuth;
