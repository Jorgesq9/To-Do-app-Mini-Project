

import { useState } from "react";

import List from "../Components/List";

import Task from "../assets/Tasks.json"

const Home = () => {
  const [addTask, setAddTask] = useState("");
  const [task, setTask] = useState(Task); // Import the Task.json data

  const addTaskToList = (event) => {
    event.preventDefault();

    const newTask = {
      id: task.length + 1,
      task: addTask,
      completed: false,
    };

    setTask((prevTask) => [...prevTask, newTask]); // Update the state with the new task
    setAddTask("");
  };

  const handleTaskDelete = (taskId) => {
    setTask((prevTask) => prevTask.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h3>Home</h3>
      <List tasks={task} onDelete={handleTaskDelete} />
      <div>
        <form onSubmit={addTaskToList}>
          <label>
            Add a Task
            <input
              name="addTask"
              type="text"
              placeholder="Add a Task"
              value={addTask} // Add the value prop here
              onChange={(event) => setAddTask(event.target.value)}
            />
          </label>
          <button type="submit">Add a task</button>
        </form>
      </div>
    </div>
  );
};

export default Home;