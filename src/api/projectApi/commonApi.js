import { post } from '../apiFun';

export const requestLogin = params => post('login', params);// 登录
export const changePassword = params => post('changePassword', params);// 修改密码
