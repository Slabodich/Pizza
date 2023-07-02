import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

enum StatusEnum {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface PizzaItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  rating: number;
}

interface PizzasState {
  items: PizzaItem[];
  status: StatusEnum;
}

export const fetchPizzas = createAsyncThunk<
  PizzaItem[],
  Record<string, string>
>('pizzas/fetchPizzasStatus', async (params) => {
  const { data }: AxiosResponse<PizzaItem[]> = await axios.get(
    'https://6480cec9f061e6ec4d49e650.mockapi.io/items',
    {
      params: {
        ...params,
      },
    },
  );
  return data;
});

const initialState: PizzasState = {
  items: [],
  status: StatusEnum.LOADING,
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(
        fetchPizzas.fulfilled,
        (state, action: PayloadAction<PizzaItem[]>) => {
          state.items = action.payload;
          state.status = StatusEnum.SUCCESS;
        },
      )
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = StatusEnum.ERROR;
        state.items = [];
      });
  },
});

export default pizzasSlice.reducer;
