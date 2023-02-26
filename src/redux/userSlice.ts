import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'user',
  initialState: {
    data: {},
    load: false
  },
  reducers: {
    changeUser(state, {payload}){
      return {...state, load: false,data:payload}
    }
  }
})

export const {changeUser} = slice.actions

export default slice.reducer;