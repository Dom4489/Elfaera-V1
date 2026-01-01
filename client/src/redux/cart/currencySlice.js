// redux/cart/currencySlice.js
import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: 'CAD',
    exchangeRates: {
      CAD: 1,
      USD: 0.72
    }
  },
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
    updateExchangeRate: (state, action) => {
      const { currency, rate } = action.payload;
      state.exchangeRates[currency] = rate;
    }
  }
});

export const { changeCurrency, updateExchangeRate } = currencySlice.actions;
export default currencySlice.reducer;