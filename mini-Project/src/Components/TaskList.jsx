import React, {useState} from 'react'
import TaskList from "../assets/Tasks.json"
import completedImg from "../assets/heavy_check_mark.png"
import toDoImg from "../assets/x.png"


const Tasklist = () => {
    const [tasks, setTasks] = useState(TaskList);

    const deleteButton = (taskId) => {

        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(updatedTasks)

    }
    

    return (

        <div>

            <h2>Task List</h2>
            <ul>

            {tasks.map((task) => {
          let imageSrc;
          if (task.completed) {
            imageSrc = completedImg;
          } else {
            imageSrc = toDoImg;
          }

         
          return (
            <li key={task.id}>
              <img className="taskImg" src={imageSrc} alt={task.completed ? "Completed" : "To do"} />
              {task.task}
              <button className='deleteButton' onClick={() => deleteButton(task.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
 export default Tasklist