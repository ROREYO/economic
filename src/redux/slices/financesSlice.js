import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('finances')) || [];

const financesSlice = createSlice({
  name: 'finances',
  initialState,
  reducers: {
    addFinance: (state, action) => {
      state.push(action.payload);
    },
    toggleFinance: (state, action) => {
      const { id, payload } = action.payload;
      return state.map((finance) => {
        if (finance.id === id) {
          const additionalProperties = finance.isEditing ? payload : {};
          return {
            ...finance,
            ...additionalProperties,
            isEditing: !finance.isEditing,
          };
        }
        return finance;
      });
    },
    deleteFinance: (state, action) => {
      return state.filter((finance) => finance.id !== action.payload);
    },
  },
});

export const { addFinance, toggleFinance, deleteFinance } = financesSlice.actions;
export default financesSlice.reducer;
