import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { todoAdapter } from './todoSlice';

const store = configureStore({
  reducer: { todos: todoReducer },
});

export default store;
