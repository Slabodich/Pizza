import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategorie: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategorie(state, action) {
      state.activeCategorie = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setActiveCategorie, setSort } = filterSlice.actions;

export default filterSlice.reducer;
