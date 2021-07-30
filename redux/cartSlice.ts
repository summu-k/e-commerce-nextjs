import { createSlice } from '@reduxjs/toolkit';
import { ProductI } from '../src/utils/interfaces';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state: ProductI[], action) => {
      const itemExists: ProductI | undefined = state.find((item: ProductI) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += 1;
      } else if (!itemExists) {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    incrementQuantity: (state: ProductI[], action) => {
      const itemIncFind: ProductI | undefined = state.find((itemInc: ProductI) => itemInc.id === action.payload);
      if (itemIncFind) {
        itemIncFind.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    decrementQuantity: (state: ProductI[], action) => {
      const itemDecFind: ProductI | undefined = state.find((item: ProductI) => item.id === action.payload);
      if (itemDecFind) {
        if (itemDecFind.quantity === 1) {
          const index = state.findIndex((item: ProductI) => item.id === action.payload);
          state.splice(index, 1);
        } else {
          itemDecFind.quantity -= 1;
        }
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item: ProductI) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
