import React, { useEffect, useState } from "react"
import Card from "./Card";
import Header from "./Header";
import "./Home.css"
import axios from "axios";

const Home = ()=>{
  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response => setUsers(response.data))
  },[])

  return (
    <>
      <Header />
      <div className="home-content">
        {users && users.map(item => 
          <Card 
            key={item.id} 
            id={item.id} 
            userId={item.id}
            title={item.title}
            progress={item.completed === false?"In Progress":"Completed"}
            />
          )}
      </div>
    </>
  )
}

export default Home;