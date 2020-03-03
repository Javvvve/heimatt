// 设置token
export const setToken = (token) => {
  window.localStorage.setItem('token', token);
};

// 获取token
export const getToken = () => window.localStorage.getItem('token');

// 设置refresh_token
export const setRefresh = (refreshToken) => window.localStorage.setItem('refresh_token', refreshToken);

// 获取refresh_token
export const getRefresh = () => window.localStorage.getItem('refresh_token');

// 删除token与refresh_token
export const clearAllToken = () => {
  window.localStorage.clear();
};
