import { StorageKeys } from '@constants';

// REDUX
export const payloadCreator = (asyncFunc) => async (arg, thunkAPI) => {
  try {
    const res = await asyncFunc(arg);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

// LOCAL STORAGE
export const addProductToCartLocalStorage = (_id, quantity, price) => {
  if (!localStorage.getItem(StorageKeys.cart)) {
    localStorage.setItem(StorageKeys.cart, JSON.stringify([]));
  }

  const cart = JSON.parse(localStorage.getItem(StorageKeys.cart));
  const idx = cart.findIndex((item) => item._id === _id);
  if (idx >= 0) {
    cart[idx].quantity += quantity;
  } else {
    cart.push({
      _id,
      quantity
    });
  }
  localStorage.setItem(StorageKeys.cart, JSON.stringify(cart));
};
export const resetCartInLocalStorage = () => {
  localStorage.setItem(StorageKeys.cart, JSON.stringify([]));
};

// TEXT
export const renderPaginationText = (pagination) => {
  const isLastIndex = pagination.currentPage === pagination.totalPages;
  return `Showing ${
    pagination.totalItems > 0 ? (pagination.currentPage - 1) * pagination.pageSize + 1 : 0
  }–${!isLastIndex ? pagination.currentPage * pagination.pageSize : pagination.totalItems} of ${
    pagination.totalItems
  } results`;
};
