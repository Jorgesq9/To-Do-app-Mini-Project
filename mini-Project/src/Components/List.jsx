
import ListElement from './ListElement'
import { Link, } from 'react-router-dom'
import Task from "../assets/Tasks.json"
import React from "react";

const List = ({ tasks, onDelete, onEdit }) => {
  const handleClick = (taskId, event) => {
    event.stopPropagation();
    event.preventDefault();
    onDelete(taskId);
  };

  const handleEditClick = (task) => {
    
    if (typeof onEdit === 'function') {
      onEdit(task);
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Link to={`/ItemsDetails/${task.id}`}>
            <ListElement task={task} />
          </Link>
          <button onClick={() => handleEditClick(task)}>Edit</button>
          <button className='deleteButton' onClick={(event) => handleClick(task.id, event)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
