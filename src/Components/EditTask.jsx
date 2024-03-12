
import React, { useState } from "react";

const EditTaskForm = ({ task, onUpdate }) => {
  const [editedTask, setEditedTask] = useState(task ? task.task : "");
  const [editedCompleted, setEditedCompleted] = useState(
    task ? task.completed : false
  );

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedTask = {
      ...task,
      task: editedTask,
      completed: editedCompleted,
    };

    onUpdate(updatedTask);
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>
        Edit Task
        <input
          type="text"
          value={editedTask}
          onChange={(event) => setEditedTask(event.target.value)}
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={editedCompleted}
          onChange={(event) => setEditedCompleted(event.target.checked)}
        />
        Completed
      </label>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTaskForm;