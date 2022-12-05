import QueryString from 'query-string';

const _PRODUCT = '/products';
export const ProductListUrl = (params) => `${_PRODUCT}?${QueryString.stringify(params)}`;
export const ProductDetailsUrl = (id) => `${_PRODUCT}/${encodeURIComponent(id)}`;
