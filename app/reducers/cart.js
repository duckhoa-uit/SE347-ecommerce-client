import cartApi from '@api/cart';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { payloadCreator, resetCartInLocalStorage } from '@utils';
import { logout } from './auth';

export const getCart = createAsyncThunk('cart/getCart', payloadCreator(cartApi.get));
export const updateCart = createAsyncThunk('cart/updateCart', payloadCreator(cartApi.update));

const cart = createSlice({
  name: 'cart',
  initialState: {
    _id: null,
    getting: false,
    current: [],
    purchaseProducts: []
  },
  reducers: {
    removeCartItem: (state, action) => {
      state.current = state.current.filter((item) => item._id !== action.payload._id);
    },
    addPurchaseProducts: (state, action) => {
      state.purchaseProducts = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state._id = action.payload.data._id;
      state.current = action.payload.data.products;
      state.getting = false;
      resetCartInLocalStorage();
    });
    builder.addCase(getCart.pending, (state, action) => {
      state.getting = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state._id = null;
      state.current = [];
      state.purchaseProducts = [];
    });
  }
  // {
  //   [getCart.fulfilled]: (state, action) => {
  //     state._id = action.payload.data._id;
  //     state.current = action.payload.data.products;
  //     state.getting = false;
  //     resetCartInLocalStorage();
  //   },
  //   [getCart.pending]: (state, action) => {
  //     state.getting = true;
  //   },
  //   [logout.fulfilled]: (state) => {
  //     state._id = null;
  //     state.current = [];
  //     state.purchaseProducts = [];
  //   }
  // }
});

const cartReducer = cart.reducer;
export const { removeCartItem, addPurchaseProducts } = cart.actions;
export default cartReducer;
