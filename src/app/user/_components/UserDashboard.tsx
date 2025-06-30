import React from 'react';
import SidebarWrapper from '@/shared/layout/SidebarWrapper';
import { useUser } from '@/context/UserContext';

const UserDashboard = () => {
  const { user: userInfo } = useUser();

  return (
    <>
      <SidebarWrapper key={'user-info-card'} />
      <h2>User Dashboard</h2>
      <p>{userInfo?.role}</p>
    </>
  );
};

export default UserDashboard;
