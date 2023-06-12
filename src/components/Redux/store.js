import { configureStore } from '@reduxjs/toolkit';
import filter from '../Redux/slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
  },
});
