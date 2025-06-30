'use client';
import React from 'react';

import UserDashboard from './_components/UserDashboard';
import withAuth from '@/hoc/withAuth_ACCESS_TOKEN_ONLY';

const User = () => {
  return <UserDashboard />;
};

export default withAuth({ redirectPath: '/auth' })(User);
