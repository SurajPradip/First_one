import Header from "./Components/Header";
import { useState } from "react";
import Tasks from "./Components/Tasks";

function App() {
  const [task , edit] = useState([
    {
        id : 1,
        work : "Create react application Cache",
        date : "December 15",
        stat : true,
    },
    {
        id : 2,
        work : "Watch film",
        date : "February 23",
        stat : false,
    },
    {
        id : 3,
        work : "Existancial crisis time",
        date : "May 19",
        stat : false,
    },
    {
        id : 4,
        work : "Go for swimming",
        date : "November 30",
        stat : true,
    },
])

const del = (id) =>{
  edit(task.filter((task) => task.id !== id))
}
  return (
    <div className="container">
      <Header />
      {Tasks.length > 0 ? (<Tasks task = {task} deletion={del}/>) : ("NOTHING HERE") }
    </div>
  );
}

export default App;
