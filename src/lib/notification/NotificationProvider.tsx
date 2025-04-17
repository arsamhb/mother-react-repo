'use client';

import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      limit={5}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover
      theme="colored"
      transition={Slide}
    />
  </>
);
