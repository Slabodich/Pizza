import { configureStore } from '@reduxjs/toolkit';
import filter from '../Redux/slices/filterSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});
