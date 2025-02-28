import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../store/slices/todoSlice';

export const Store = configureStore({
  reducer: todoReducer,
});
