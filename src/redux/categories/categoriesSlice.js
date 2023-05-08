import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: [],
    status: 'Under construction'
}

const categoryList = createSlice({
    name: 'categories',
    initialState: initialState.status,
})

export default categoryList.reducer