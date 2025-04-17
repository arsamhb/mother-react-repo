import { toast, ToastOptions } from 'react-toastify';

export const notify = {
  success: (msg: string, opts?: ToastOptions) => toast.success(msg, opts),
  error: (msg: string, opts?: ToastOptions) => toast.error(msg, opts),
  info: (msg: string, opts?: ToastOptions) => toast.info(msg, opts),
  warn: (msg: string, opts?: ToastOptions) => toast.warn(msg, opts),
};
