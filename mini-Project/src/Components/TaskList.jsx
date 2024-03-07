
import React, {useState} from 'react'
import useTasks from './useTasks';
import List from "./List"


const Tasklist = () => {
    const { tasks, onDelete, addTask } = useTasks();
    
    return (
        <List tasks={tasks} onDelete={onDelete} addTask={addTask}/>
    )
};

export default Tasklist