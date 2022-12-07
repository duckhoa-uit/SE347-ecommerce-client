import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import appReducer from '@reducer/app';
import authReducer from '@reducer/auth';
import cartReducer from '@reducer/cart';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    cart: cartReducer
  }
});
// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
