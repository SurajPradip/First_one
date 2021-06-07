import Header from "./Components/Header";
import { useState , useEffect } from "react";
import Tasks from "./Components/Tasks";
import Form from "./Components/Form";

function App() {
  const [task , edit] = useState([])

const add = async (inp) =>{
 const res = await fetch("http://localhost:8000/tasks" , {
   method : "POST",
   headers : { 'Content-type' : 'application/json'},
   body : JSON.stringify(inp)
 })
 const newTask = await res.json()
  
  edit([...task , newTask])
}

useEffect(() =>{
  const func = async() =>{
    const data = await fetch("http://localhost:8000/tasks")
    const oldTasks = await data.json()
    edit(oldTasks)
  }

  func()
},[])

const toggle = async (id) =>{
  const getToggle = async (id) => {

    const res = await fetch(`http://localhost:8000/tasks/${id}`)
    const data = await res.json()
    return data;
    }
    
     const changableElement = await getToggle(id)
     const changedElement = {...changableElement , stat : !changableElement.stat}
      await fetch(`http://localhost:8000/tasks/${id}`,{
       method : 'PUT',
       headers : {'Content-type' : 'application/json'},
       body : JSON.stringify(changedElement)
     })
    edit(task.map((task) => task.id === id ? {...task , stat : !task.stat} : task))
  }

const del =async (id) =>{
  await fetch(`http://localhost:8000/tasks/${id}`,{
    method : "DELETE"
  })
  edit(task.filter((task) => task.id !== id))
}


  return (
    <div className="container">
      <Header/>
      <Form fun={add} />
      {task.length > 0 ? (<Tasks task = {task} deletion={del} toggle={toggle}/>) : (<h3 className='white'>NOTHING HERE</h3>) }
    </div>
  );
}

export default App;
