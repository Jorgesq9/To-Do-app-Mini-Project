import { useState } from 'react'

const AddTaskForm = ({ addTask }) => {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(inputValue)
        setInputValue("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}
                placeholder="Add a new Task" />
            <button>Add Task</button>
        </form>
    )
}

export default AddTaskForm