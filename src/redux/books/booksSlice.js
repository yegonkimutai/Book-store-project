import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oKNjFS0uY2VpZuRwjbZm/books'

const initialState = {
  books: [],
  isLoading: false
};


export const fetchBooks = createAsyncThunk('books/fetchBooks', async() => {
  try{
    const response = await axios(url)
    const result = response.data
    const array = Object.keys(result).map((key) => ({
      item_id: key,
      ...result[key][0]
    }))

    return array

  }catch(err) {
    throw new Error ('Failed to fetch books')
  }
})

export const addBooks = createAsyncThunk('books/addBooks', async(obj) => {
  try{
    const resp = await axios.post(url, obj)
    return resp.data
  } catch (error) {
    throw new Error ('Failed to add')
  }
})

export const removeABook = createAsyncThunk('books/removeBook', async(id) => {
  try{
   await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oKNjFS0uY2VpZuRwjbZm/books/${id}`)
    return ('Successful')
  } catch(error) {
    throw new Error ('Failed to delete')
  }
})

const bookList = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
      builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true
      })

      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload
      })

      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false
      })

      .addCase(addBooks.pending, (state) => {
        state.isLoading = true
      })

      .addCase(addBooks.fulfilled,  (state, action) => {
        const newBook = {
          id: action.meta.arg.item_id,
          title: action.meta.arg.title,
          author: action.meta.arg.author,
        };

        state.books.push(newBook);
        return state;
      })

      .addCase(addBooks.rejected, (state) => {
        state.isLoading = false
      })

      .addCase(removeABook.pending, (state) => {
        state.isLoading = false
      })

      .addCase(removeABook.fulfilled,  (state, action) => {
        const newBooks = state.books.filter((book) => book.item_id !== action.meta.arg);

        return {
          ...state,
          books: newBooks,
        };
      })

      .addCase(removeABook.rejected, (state) => {
        state.isLoading = false
      })
    }
    
  }
);

export default bookList.reducer;

