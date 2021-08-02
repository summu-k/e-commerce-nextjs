import { createSlice } from '@reduxjs/toolkit';
import { ProductDataProps } from '../src/utils/interfaces';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state: ProductDataProps[], action) => {
      const itemExists: ProductDataProps | undefined = state.find(
        (item: ProductDataProps) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity += 1;
      } else if (!itemExists) {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    incrementQuantity: (state: ProductDataProps[], action) => {
      const itemIncFind: ProductDataProps | undefined = state.find(
        (itemInc: ProductDataProps) => itemInc.id === action.payload
      );
      if (itemIncFind) {
        itemIncFind.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    decrementQuantity: (state: ProductDataProps[], action) => {
      const itemDecFind: ProductDataProps | undefined = state.find(
        (item: ProductDataProps) => item.id === action.payload
      );
      if (itemDecFind) {
        if (itemDecFind.quantity === 1) {
          const index = state.findIndex((item: ProductDataProps) => item.id === action.payload);
          state.splice(index, 1);
        } else {
          itemDecFind.quantity -= 1;
        }
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item: ProductDataProps) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
