// 'use client';

// import React, { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useUser } from '@/context/UserContext';
// import Loading from '@/shared/UI/Loading';
// import { Roles } from '@/shared/service/interface.schema';

// interface WithRoleOptions {
//   roles: Roles[];
//   redirectPath?: string;
// }

// const withRole = ({ roles, redirectPath = '/' }: WithRoleOptions) => {
//   return function <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
//     return function ComponentWithRole(props: P) {
//       const router = useRouter();
//       const { user, isLoading, error } = useUser();

//       useEffect(() => {
//         if (!isLoading) {
//           if (error || !user || !roles.includes(user.role)) {
//             router.push(redirectPath);
//           }
//         }
//       }, [isLoading, user, error, roles, redirectPath, router]);

//       if (isLoading) {
//         return (
//           <div className="flex flex-col gap-lg m-auto items-center">
//             <h3 className="text-2xl">در حال دریافت اطلاعات کاربر</h3>
//             <Loading size="lg" />
//           </div>
//         );
//       }

//       if (user && roles.includes(user.role)) {
//         return <WrappedComponent {...props} />;
//       }

//       return null;
//     };
//   };
// };

// export default withRole;
