import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

export const store = configureStore({
    reducer: {
        books: bookReducer,
        category: categoryReducer
    },
  });