import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import appReducer from '@reducer/app';
import authReducer from '@reducer/auth';
import cartReducer from '@reducer/cart';

const reducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  cart: cartReducer
});
export const store = configureStore({
  reducer
});
// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
