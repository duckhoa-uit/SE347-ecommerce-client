import { checkExpiredToken } from '@utils';
import axios from 'axios';
import { parse, stringify } from 'query-string';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs

const axiosClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: {
    encode: parse,
    serialize: stringify
  }
});

axiosClient.interceptors.request.use(
  async (config) => {
    // add authorization
    // const token = getAccessToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use((response) => {
  checkExpiredToken(response.data);

  if (response && response.data.errorCode === 0) {
    return response.data;
  }
  throw response.data;
});

export default axiosClient;
