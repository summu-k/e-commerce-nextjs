import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import { notificationReducer } from './notificationSlice';
import { addToCompareReducer } from './addToCompareSlice';

const reducer = {
  cart: cartReducer,
  notification: notificationReducer,
  compare: addToCompareReducer,
};

const store = configureStore({
  reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
