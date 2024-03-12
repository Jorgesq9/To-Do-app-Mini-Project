
import React, {useState} from 'react'
import TaskList from "../assets/Tasks.json"
import List from "./List"


const Tasklist = ({ tasks, onDelete }) => {
    return (
      <div>
        <h3>Tasklist</h3>
        <List tasks={tasks} onDelete={onDelete} />
      </div>
    );
  };
  
  export default Tasklist;