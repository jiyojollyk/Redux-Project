import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './action'

export default configureStore({
  reducer: {
    cart : cartReducer
  }
})