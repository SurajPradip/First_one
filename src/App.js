import Header from "./Components/Header";
import { useState } from "react";
import Tasks from "./Components/Tasks";
import Form from "./Components/Form";

function App() {
  const [task , edit] = useState([])

const add = (inp) =>{
  const id = Math.floor(Math.random() * 10000 + 1)
  const newTask = {id , ...inp}
  edit([...task , newTask])
}

const toggle = (id) =>{
  edit(task.map((task) => task.id === id ? {...task , stat : !task.stat} : task))
}

const del = (id) =>{
  edit(task.filter((task) => task.id !== id))
}


  return (
    <div className="container">
      <Header/>
      <Form fun={add} />
      {task.length > 0 ? (<Tasks task = {task} deletion={del} toggle={toggle}/>) : (<h3>NOTHING HERE</h3>) }
    </div>
  );
}

export default App;
