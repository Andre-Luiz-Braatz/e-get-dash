import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import productSlice from './productSlice'

export default configureStore({
  reducer:{
    user: userReducer,
    product: productSlice,
  }
})