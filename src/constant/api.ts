import { AxiosRequestConfig } from 'axios';
import { API_URL } from '../config/constant';

export const API_CONFIG: AxiosRequestConfig = {
  timeout: 30000,
  baseURL: API_URL,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
};
