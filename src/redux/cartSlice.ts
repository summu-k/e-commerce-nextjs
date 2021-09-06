import { createSlice } from '@reduxjs/toolkit';
import { ProductMapProps } from '../utils/interfaces';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state: ProductMapProps[], action) => {
      const itemExists: ProductMapProps | undefined = state.find(
        (item: ProductMapProps) => item.id === action.payload.id
      );
      if (itemExists && itemExists.quantity) {
        itemExists.quantity += 1;
      } else if (!itemExists) {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    incrementQuantity: (state: ProductMapProps[], action) => {
      const itemIncFind: ProductMapProps | undefined = state.find(
        (itemInc: ProductMapProps) => itemInc.id === action.payload
      );
      if (itemIncFind && itemIncFind.quantity) {
        itemIncFind.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    decrementQuantity: (state: ProductMapProps[], action) => {
      const itemDecFind: ProductMapProps | undefined = state.find(
        (item: ProductMapProps) => item.id === action.payload
      );
      if (itemDecFind && itemDecFind.quantity) {
        if (itemDecFind.quantity === 1) {
          const index = state.findIndex((item: ProductMapProps) => item.id === action.payload);
          state.splice(index, 1);
        } else {
          itemDecFind.quantity -= 1;
        }
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item: ProductMapProps) => item.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
