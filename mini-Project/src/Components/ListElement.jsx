
import React from 'react';
import completedImg from '../assets/heavy_check_mark.png';
import toDoImg from '../assets/x.png';

const ListElement = ({ task, onDelete}) => {
    const imageSrc = task.completed ? completedImg : toDoImg

    const deleteButton = (event) => {
      event.stopPropagation(); 
      onDelete(task.id);
    };


return (

    <>

<img className="taskImg" src={imageSrc} alt={task.completed ? 'Completed' : 'To do'} />
      {task.task}
      <button className="deleteButton" onClick={deleteButton}>
        Delete
      </button>

    </> 
    
    ) 

}

export default ListElement