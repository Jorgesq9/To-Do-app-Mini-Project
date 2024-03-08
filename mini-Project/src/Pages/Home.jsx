

import { useState } from "react";

import List from "../Components/List";
import EditTaskForm from "../Components/EditTask";
import Task from "../assets/Tasks.json"

const Home = () => {
  const [addTask, setAddTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const [task, setTask] = useState(Task);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const addTaskToList = (event) => {
    event.preventDefault();

    const newTask = {
      id: task.length + 1,
      task: addTask,
      completed: completed,
    };

    setTask((prevTask) => [...prevTask, newTask]);
    setAddTask("");
    setCompleted(false);
  };

  const handleTaskDelete = (taskId) => {
    setTask((prevTask) => prevTask.filter((task) => task.id !== taskId));
  };

  const handleTaskUpdate = (updatedTask) => {
    setTask((prevTask) =>
      prevTask.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setTaskToUpdate(null);
  };

  return (
    <div>
      <h3>Home</h3>
      <List
        tasks={task}
        onDelete={handleTaskDelete}
        onEdit={(selectedTask) => setTaskToUpdate(selectedTask)}
      />
      {taskToUpdate && (
        <EditTaskForm task={taskToUpdate} onUpdate={handleTaskUpdate} />
      )}
      <div>
        <form onSubmit={addTaskToList}>
          <label>
            Add a Task
            <input
              name="addTask"
              type="text"
              placeholder="Add a Task"
              value={addTask}
              onChange={(event) => setAddTask(event.target.value)}
            />
          </label>
          <label>
            <input
              name="completed"
              type="checkbox"
              checked={completed}
              onChange={(element) => setCompleted(element.target.checked)}
            />
          </label>
          <button type="submit">Add a task</button>
        </form>
      </div>
    </div>
  );
};

export default Home