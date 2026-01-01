// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import currencyReducer from './cart/currencySlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    currency: currencyReducer
  }
}); 