import Task from "./Task"

const Tasks = ({task , deletion , toggle}) => {
    
    return (
        <>
          {
              task.map((tasky) =>
                  (<Task key={tasky.id} task={tasky} del={deletion} toggle ={toggle}/>)
              )
          }  
        </>
    )
}

export default Tasks
