
import ListElement from './ListElement'
import { Link } from 'react-router-dom'


const List = ({tasks, onDelete}) => {
    const handleClick = (taskId, event) => {
        event.stopPropagation();
        event.preventDefault();
        
        
        onDelete(taskId);
      };
    return (
        <div>

        <h2>Task List</h2>
        <ul>

        {tasks && tasks.map((task) => (
            <li key={task.id}>
            <Link to={`/ItemsDetails/${task.id}`}>

            <ListElement task={task} />
            </Link>
            <button className='deleteButton' onClick={(event) => handleClick (task.id, event)}>Delete</button>
            </li>
        ))}

        </ul>
        </div>
    )
}

export default List

