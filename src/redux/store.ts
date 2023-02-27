import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import productSlice from './productSlice'
import categorySlice from './categorySlice'

export default configureStore({
  reducer:{
    user: userReducer,
    product: productSlice,
    category: categorySlice,
  }
})