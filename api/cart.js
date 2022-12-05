import { AddToCartUrl, CartDetailsUrl, ReadUserCartUrl } from '@urls/cart';
import axiosClient from './axios-client';

const cartApi = {
  get: () => {
    const url = ReadUserCartUrl;
    return axiosClient.get(url);
  },
  update: ({ cartId, payload }) => {
    const url = CartDetailsUrl(cartId);
    return axiosClient.put(url, JSON.stringify(payload));
  },
  addToCart: ({ cartId, payload }) => {
    const url = AddToCartUrl(cartId);
    return axiosClient.put(url, JSON.stringify(payload));
  }
  // FIXME: move to order api
  // createOrder: (payload) => {
  //   const url = 'orders';
  //   return axiosClient.post(url, JSON.stringify(payload));
  // }
};
export default cartApi;
