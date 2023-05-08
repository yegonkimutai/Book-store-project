import { createSlice } from '@reduxjs/toolkit';

const categoryList = createSlice({
    name: 'categories',
    initialState: { 
        categories: [], 
        status: 'Under construction' 
    },
})

export default categoryList.reducer