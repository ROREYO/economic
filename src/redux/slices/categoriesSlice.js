import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('categories')) || [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    deleteCategory: (state, action) => {
      return state.filter((category) => category.id !== action.payload);
    },
  },
});

export const { addCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
