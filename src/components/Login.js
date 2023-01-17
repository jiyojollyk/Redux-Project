import React, { useEffect, useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import {userLogin} from "./redux/action"
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login =()=>{
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.cart.token)

  const submit =()=>{
    axios.post("https://dummyjson.com/auth/login",
    {username:username,password:password})
    .then(response => {
      if(response.data.id){
        dispatch(userLogin(response.data))
      }
    })
  }

  useEffect(()=>{
    if(token){
      navigate("/home")
    }
    else{ navigate("/login")}
  },[token])
  return(
    <div className="login-container">
      <div className="login-card">
        <h3 style={{marginBottom:30}}>Hi there...please login..</h3>
        <div className="input-container">
          <label>Username</label>
          <input type="text" className="form-contol" onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" className="form-contol" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className="button-container" style={{marginTop:30}}>
          <button className="login-button" onClick={()=>submit()}>Login</button>
          <button className="reset-button">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Login