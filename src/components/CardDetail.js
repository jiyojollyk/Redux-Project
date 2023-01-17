import axios from "axios"
import React, { useEffect, useState } from "react"
import {useParams,useNavigate} from "react-router-dom"
import Header from "./Header"

const CardDetail = ()=>{
  let id = useParams()
  const navigate = useNavigate()
  const [detail,setDetail] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos/" + id.id)
    .then(response => {
      setDetail(response.data)
    })
  },[])
  return(
    <>
      <Header />
      <div style={{padding:20}}>
        <h2>Item Details...{detail.title}</h2>
        <h4 style={{marginTop:20,marginBottom:20}}>Progress - {detail.completed === false?"In Progress":"Completed"}</h4>
        <button className="login-button" onClick={()=>navigate("/home")}>Go Back</button>
      </div>
    </>
  ) 
}

export default CardDetail