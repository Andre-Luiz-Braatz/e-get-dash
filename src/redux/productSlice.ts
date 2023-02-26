import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    load: false
  },
  reducers: {
    changeProduct(state, {payload}){
      return {...state, load: false,data:payload}
    },
    loadProduct(state, {payload}){
      return {...state, load: payload}
    }
  }
})

export const {changeProduct,loadProduct} = slice.actions

export default slice.reducer;