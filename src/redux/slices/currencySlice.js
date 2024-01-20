import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies', async () => {
  const response = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`);
  return response.data.Valute;
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
