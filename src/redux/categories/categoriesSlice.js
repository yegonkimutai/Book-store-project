import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
    categories: [],
  }

const categoryList = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
        state.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories
    }
  }
});

export const { checkStatus } = categoryList.actions
export default categoryList.reducer;
