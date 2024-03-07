
import React from 'react';
import completedImg from '../assets/heavy_check_mark.png';
import toDoImg from '../assets/x.png';

const ListElement = ({ task }) => {
    const imageSrc = task.completed ? completedImg : toDoImg

    


return (

    <>
<img className="taskImg" src={imageSrc} alt={task.completed ? 'Completed' : 'To do'} />
      {task.task}
      

    </> 
    
    ) 

}

export default ListElement