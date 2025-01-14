import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';

const ToastWrapper = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      limit={5}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      //   rtl
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover
      theme="colored"
      transition={Slide}
    />
  );
};

export default ToastWrapper;
