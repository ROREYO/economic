import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const key = '709a828f3a30f0b8deec6faeddb745aa';
const symbols = 'USD,GBP,JPY,RUB';

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies', async () => {
  const response = await axios.get(
    `http://data.fixer.io/api/latest?access_key=${key}&symbols=${symbols}`,
  );
  return response.data.rates;
});

const currencySlice = createSlice({
  name: 'currencies',
  initialState: {
    data: undefined,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default currencySlice.reducer;
