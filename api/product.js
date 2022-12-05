import { ProductDetailsUrl, ProductListUrl } from '@urls/product';
import axiosClient from './axios-client';

const productApi = {
  getProducts: (params) => {
    const url = ProductListUrl(params);
    return axiosClient.get(url, { params });
  },
  getProduct: (id) => {
    const url = ProductDetailsUrl(id);
    return axiosClient.get(url);
  },
  getAllCategories: () => {
    const url = '/categories';
    return axiosClient.get(url);
  }
};
export default productApi;
