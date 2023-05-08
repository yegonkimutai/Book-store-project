import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookList = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookList.actions;

export default bookList.reducer;
