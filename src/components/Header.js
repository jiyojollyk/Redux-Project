import React from "react"
import "./Header.css"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Header =() =>{
  const cart = useSelector(state => state.cart.value)
  const navigate = useNavigate()
  return (
    <div className="header">
      <div className="left-container">
        <h2 className="header-text">Shopping Mart</h2>
      </div>
      <div className="right-container">
        <h3 className="header-text" onClick={()=>{navigate("/cart")}}>Cart</h3>
        <div className="round">
          <h2 className="count">{cart}</h2>
        </div>
        <h4 style={{color:"#fff",marginLeft:10,cursor:"pointer"}}>Logout</h4>
      </div>
    </div>
  )
}

export default Header;