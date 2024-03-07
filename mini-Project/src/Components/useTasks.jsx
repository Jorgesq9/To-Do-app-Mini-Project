
import { useLocalStorage } from "react-use";
import Task from '../assets/Tasks.json'

const useTasks = () => {
    const [tasks, setTasks] = useLocalStorage('tasks', Task)

    const addTask = (text) => {
      setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text }]);
    };

    const onDelete = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId) 
        setTasks(updatedTasks)
    }

    return {tasks,addTask ,onDelete}

}

export default useTasks