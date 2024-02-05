import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    products: [],
    user: [],
  }

export const avitoSlice = createSlice({
  name: 'products',
  initialState,
   
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = avitoSlice.actions;

export default avitoSlice.reducer;