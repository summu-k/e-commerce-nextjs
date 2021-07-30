/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { msg: '', type: '' },
  reducers: {
    addNotification: (state, action) => {
      state.msg = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

export const notificationReducer = notificationSlice.reducer;

export const { addNotification } = notificationSlice.actions;
