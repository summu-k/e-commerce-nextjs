import { FC } from 'react';
import type { AppDispatch } from '../redux/store';
import { addNotification } from '../redux/notificationSlice';

interface ToastProps {
  message: string;
  type: string;
  dispatch: AppDispatch;
}

const showToast: FC<ToastProps> = ({ message, type, dispatch }): any => {
  dispatch(addNotification({ message, type }));
  setTimeout(() => {
    dispatch(addNotification({ message: '', type: '' }));
  }, 10000);
};

export default showToast;
