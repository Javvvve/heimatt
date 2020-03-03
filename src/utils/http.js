import axios from 'axios';
import { getToken, getRefresh } from './token';

export const Http = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn',
});

Http.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      // config.headers.token = token;
      Reflect.defineProperty(config.headers, 'token', {
        value: `Bearer ${token}`,
        enumerable: true,
        writable: true,
        configurable: true,
      });
    }
    if (config.url === 'refresh') {
      // window.console.log(getRefresh());
      // config.headers.refresh_token = getRefresh();
      Reflect.defineProperty(config.headers, 'refresh_token', {
        value: getRefresh(),
        enumerable: true,
        writable: true,
        configurable: true,
      });
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 用于更新请求的axios请求
export const ot = 1;
