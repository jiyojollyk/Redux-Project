import { createSlice } from '@reduxjs/toolkit'

export const addtoCartSlice = createSlice({
  name: 'addtocart',
  initialState: {
    value: 0,
    cartItems : [],
    userId: 0,
    token: "",
    isAuthenticated:false
  },
  reducers: {
    addtoCart: (state, action) => {
      state.value += 1
      // state.cartItems.push(action.payload)
      state.cartItems = [...state.cartItems, action.payload]
    },
    removefromCart: (state,action) => {
      var index = state.cartItems.findIndex(item => item.userId === action.payload.userId)
      state.cartItems.splice(index, 1)
      state.value -= 1
    },
    userLogin: (state,action) =>{
      state.userId = action.payload.id
      state.token = action.payload.token
      state.isAuthenticated = true
    }
  }
})

export const { addtoCart, removefromCart, userLogin } = addtoCartSlice.actions

export default addtoCartSlice.reducer