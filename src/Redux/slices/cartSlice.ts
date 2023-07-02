import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CartItem = {
  unic: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

interface CartState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const { unic, type, size } = action.payload;

      const findItem = state.items.find((obj) => obj.unic === unic);
      const hasTypeWithSize = state.items.some(
        (obj) => obj.type === type && obj.size === size,
      );

      if (findItem && hasTypeWithSize) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    plusCount(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (obj) => obj.unic === action.payload.unic,
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusCount(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (obj) => obj.unic === action.payload.unic,
      );

      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.unic !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusCount, plusCount } =
  cartSlice.actions;

export default cartSlice.reducer;
