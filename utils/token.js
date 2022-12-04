import { StorageKeys } from '@constants';

export const getAccessToken = () => {
  return localStorage.getItem(StorageKeys.accessToken);
};

export const checkExpiredToken = async (responseData) => {
  if (responseData.errorCode === 401 && responseData.message === 'Token is invalid or expired') {
    removeBearerToken();
    window.location.hash = '/auth/login';
  }
};

export const removeBearerToken = () => {
  localStorage.removeItem(StorageKeys.accessToken);
};
