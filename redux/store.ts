import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import { notificationReducer } from './notificationSlice';

const reducer = {
  cart: cartReducer,
  notification: notificationReducer,
};

const store = configureStore({
  reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
