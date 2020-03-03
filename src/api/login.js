import { Http } from '@/utils/http';

// 获取短信验证码
export const sendCode = (mobile) => Http.get(`/app/v1_0/sms/codes/${mobile}`);

// 用户登录注册
export const login = (data) => Http.post('/app/v1_0/authorizations', data);
