const _CART = '/cart';

export const ReadUserCartUrl = `${_CART}/readUserCart`;
// DETAILS
export const CartDetailsUrl = (id) => `${_CART}/${encodeURIComponent(id)}`;
export const AddToCartUrl = (id) => `${_CART}/add-item/${encodeURIComponent(id)}`;
