import {
  ChangePasswordUrl,
  CheckAccessTokenUrl,
  LoginUrl,
  LogoutUrl,
  RegisterUrl
} from '@urls/auth';
import axiosClient from './axios-client';

const authApi = {
  login: (data) => {
    const url = LoginUrl;
    return axiosClient.post(url, data);
  },
  logout: () => {
    const url = LogoutUrl;
    return axiosClient.get(url);
  },
  changePassword: (payload) => {
    const url = ChangePasswordUrl;
    return axiosClient.put(url, JSON.stringify(payload));
  },
  register: (data) => {
    const url = RegisterUrl;
    return axiosClient.post(url, data);
  },
  checkAccessToken: () => {
    const url = CheckAccessTokenUrl;
    return axiosClient.post(url);
  }
};
export default authApi;
