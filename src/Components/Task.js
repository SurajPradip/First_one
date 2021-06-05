import { FaTimes } from 'react-icons/fa'

const Task = ({task , del}) => {
    return (
        <div className='task'>
          <h3>{task.id +". "+ task.work} <FaTimes style ={{color : "red"}} onClick={() => del(task.id)}/> </h3>
          <p>{task.date}</p> 
        </div>
    )
}

export default Task
