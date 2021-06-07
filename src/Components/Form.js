import { useState } from 'react'

const Form = ({fun , cal}) => {
    const [task , editTask] =useState('')
    const [date , editDate] = useState('')
    const [stat , editStat] = useState(false)

    const call = (e) => {
        e.preventDefault()

        if(!task){
            alert("ENTER TASK")
            return
        }

        if(!date){
            alert("ENTER DATE")
            return
        }

        fun({task , date , stat})

        editTask("")
        editDate("")
        editStat(false)
    }

    return (
        <form className='add-form' onSubmit={call}>
            <div className='form-control'>
                <label>Task</label>
                <input value ={task} onChange={(e) => editTask(e.target.value)} type='text' placeholder='Add Task'/>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input value ={date} onChange={(e) => editDate(e.target.value)} type='text' placeholder='Add Date'/>
            </div>
            <div className='form-control-check'>
                <label>Reaminder</label>
                <input checked={stat} value={stat} onChange={(e) => editStat(e.currentTarget.checked)} type='checkbox'/>
            </div>
            <input  type='submit' className='btn btn-block' onSubmit={cal} />
        </form>
    )
}

export default Form
