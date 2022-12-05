import { GetCurrentUserInfoUrl, UpdateUserInfoUrl } from '@urls/user';
import axiosClient from './axios-client';

const userApi = {
  getMe: () => {
    const url = GetCurrentUserInfoUrl;
    return axiosClient.get(url);
  },
  updateMe: (payload) => {
    const url = UpdateUserInfoUrl;
    return axiosClient.put(url, JSON.stringify(payload));
  }
};
export default userApi;
