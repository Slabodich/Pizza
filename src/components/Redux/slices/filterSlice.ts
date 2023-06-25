import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SortPropertyEnum {
  RATING = 'rating',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
  TITLE_ASC = '-title',
}

export type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

interface FilterState {
  activeCategorie: number;
  sort: SortItem;
}

const initialState: FilterState = {
  activeCategorie: 0,
  sort: {
    name: 'популярности',
    sortProperty: SortPropertyEnum.PRICE_ASC,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategorie(state, action: PayloadAction<number>) {
      state.activeCategorie = action.payload;
    },
    setSort(state, action: PayloadAction<SortItem>) {
      state.sort = action.payload;
    },
  },
});

export const { setActiveCategorie, setSort } = filterSlice.actions;

export default filterSlice.reducer;
