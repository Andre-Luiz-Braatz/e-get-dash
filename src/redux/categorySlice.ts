import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'category',
  initialState: {
    data: [],
    load: false
  },
  reducers: {
    changeCategory(state, {payload}){
      return {...state, load: false,data:payload}
    },
    loadCategory(state, {payload}){
      return {...state, load: payload}
    }
  }
})

export const {changeCategory,loadCategory} = slice.actions

export default slice.reducer;