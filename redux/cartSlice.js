import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += 1;
      } else if (!itemExists) {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const itemIncFind = state.find((itemInc) => itemInc.id === action.payload);
      itemIncFind.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const itemDecFind = state.find((item) => item.id === action.payload);
      if (itemDecFind.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        itemDecFind.quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
