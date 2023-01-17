import React from "react"
import "./Card.css"
import { useDispatch } from 'react-redux';
import {addtoCart} from "./redux/action"
import {useNavigate} from "react-router-dom"

const Card=(props)=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return(
    <div className="card-container" onClick={()=>navigate(`/detail/${props.id}`)}>
      <div className="card-header">
        <h3>{"Item" + props.userId}</h3>
      </div>
      <p>{props.title}</p>
      <div>
        <h5>Progress: {props.progress}</h5>
      </div>
      <button className="button-primary"
        onClick={() => dispatch(addtoCart(props))}
      >Buy Now</button>
    </div>
  )
}

export default Card