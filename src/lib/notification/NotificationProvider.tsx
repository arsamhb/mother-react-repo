'use client';

import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <ToastContainer
      position="top-left"
      autoClose={2500}
      limit={5}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl
      pauseOnFocusLoss={false}
      draggable={true}
      pauseOnHover
      theme="colored"
      transition={Slide}
    />
  </>
);
