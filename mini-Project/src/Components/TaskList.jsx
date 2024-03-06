
import React, {useState} from 'react'
import TaskList from "../assets/Tasks.json"
import List from "./List"


const Tasklist = () => {
    const [tasks, setTasks] = useState(TaskList);

    const deleteButton = (taskId) => {

        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(updatedTasks)

    }
    

    return (

    <List tasks={tasks} onDelete={deleteButton} />
    )
};
 export default Tasklist