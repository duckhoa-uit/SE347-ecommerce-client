import cartApi from '@api/cart';
import productApi from '@api/product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { payloadCreator } from '@utils';
// import productApi from './productApi';

export const addToCart = createAsyncThunk('product/addToCart', payloadCreator(cartApi.addToCart));
export const getCategories = createAsyncThunk(
  'product/getCategories',
  payloadCreator(productApi.getAllCategories)
);
