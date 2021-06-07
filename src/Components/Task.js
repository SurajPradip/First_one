import { FaTimes } from 'react-icons/fa'

const Task = ({task , del , toggle}) => {
    return (
        <div className={`task ${task.stat ? 'reminder' : ''}`}  onDoubleClick={() => toggle(task.id)}>
          <h3>{task.task} <FaTimes style ={{color : "red"}} onClick={() => del(task.id)}/> </h3>
          <p>{task.date}</p> 
        </div>
    )
}

export default Task
