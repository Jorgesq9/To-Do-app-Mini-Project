import Tasklist from "../Components/TaskList";
import AddTaskForm from "../Components/AddTaskForm";

const Home = (tasks, onDelete) => {
  return (
    <div>
      <h3>Home</h3>
      <Tasklist tasks={tasks} onDelete={onDelete} />
    </div>
  );
};

export default Home;
