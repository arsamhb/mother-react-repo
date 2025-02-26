import axios, { AxiosError } from 'axios';

export const UNKNOWN_ERROR = {
  message: 'خطایی رخ داده است.',
  statusCode: 410,
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_BASE_URL ?? 'www.example.com/api',
  timeout: 5000,
});

// THIS PART HANDLES ONLY accessToken
// import { tokenPersister } from './persisters/tokenPersister';
// instance.interceptors.request.use((config) => {
//   const token = tokenPersister.get();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

const post = <T, O>(
  url: string,
  local2api: (local: T) => any = (local: T) => local,
  api2local: (api: any) => O = (api: any) => api
) => {
  return async (body: T) => {
    try {
      const response = await instance.post(url, local2api(body));
      return api2local(response.data) as O;
    } catch (e) {
      const error = e as AxiosError;
      return Promise.reject(error.response?.data ?? UNKNOWN_ERROR);
    }
  };
};

const get = <O>(url: string, api2local: (api: any) => O = (api) => api, queryParams: any = {}) => {
  return async () => {
    try {
      const response = await instance.get(url, { params: queryParams });
      return api2local(response.data) as O;
    } catch (e) {
      const error = e as AxiosError;
      return Promise.reject(error.response?.data ?? UNKNOWN_ERROR);
    }
  };
};

const _delete = <T>(url: string) => {
  return async (queryParams: T) => {
    try {
      const response = await instance.delete(url, { params: queryParams });
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      return Promise.reject(error.response?.data ?? UNKNOWN_ERROR);
    }
  };
};

const put = <T, O>(
  url: string,
  local2api: (local: T) => any = (local: T) => local,
  api2local: (api: any) => O = (api: any) => api
) => {
  return async (body: T) => {
    try {
      const response = await instance.put(url, local2api(body));
      return api2local(response.data) as O;
    } catch (e) {
      const error = e as AxiosError;
      return Promise.reject(error.response?.data ?? UNKNOWN_ERROR);
    }
  };
};

const api = {
  get,
  post,
  delete: _delete,
  put,
};

export default api;
