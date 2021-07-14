import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const item = state.find((itemInc) => itemInc.id === action.payload);
      item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((itemDec) => itemDec.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((itemD) => itemD.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
