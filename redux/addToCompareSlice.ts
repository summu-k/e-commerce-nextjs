/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { ProductDataProps } from '../src/utils/interfaces';

interface CompareProductProps {
  products: ProductDataProps[];
  show: boolean;
}

const addToCompareSlice = createSlice({
  name: 'compare',
  initialState: { products: [], show: false },
  reducers: {
    addToCompare: (state: CompareProductProps, action) => {
      state.products.push({ ...action.payload.products, quantity: 1 });
    },
    removeFromCompare: (state: CompareProductProps, action) => {
      const index = state.products.findIndex((item: ProductDataProps) => item.id === action.payload);
      state.products.splice(index, 1);
    },
    showCompareModal: (state: CompareProductProps, action) => {
      state.show = action.payload.show;
    },
  },
});

export const addToCompareReducer = addToCompareSlice.reducer;

export const { addToCompare, removeFromCompare, showCompareModal } = addToCompareSlice.actions;
