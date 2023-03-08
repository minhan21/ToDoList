import {configureStore} from '@reduxjs/toolkit';
import todoListReducer from '../Providers/todoListSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
