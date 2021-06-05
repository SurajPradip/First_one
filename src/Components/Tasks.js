import Task from "./Task"

const Tasks = ({task , deletion}) => {
    
    return (
        <>
          {
              task.map((tasky) =>
                  (<Task key={tasky.id} task={tasky} del={deletion}/>)
              )
          }  
        </>
    )
}

export default Tasks
