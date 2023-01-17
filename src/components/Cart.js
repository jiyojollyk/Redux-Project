import React from "react"
import Header from "./Header"
import "./Cart.css"
import {useSelector, useDispatch} from "react-redux"
import {removefromCart} from "./redux/action"

const Cart = ()=>{
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()
  return (
    <>
      <Header />
      <div className="cart-container">
        {cartItems.map(item => (
          <div className="cart-card" key={item.userId}>
            <h3>{item.title}</h3>
            <div className="round" onClick={()=>dispatch(removefromCart(item))}>
              <h2 style={{color:"#fff"}}>-</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart