
import ListElement from './ListElement'
import { Link } from 'react-router-dom'

const List = ({tasks, onDelete}) => {
    const handleClick = (event, taskId) => {
        // Prevent the click event from propagating to the parent (List) component
        event.stopPropagation();
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
            <button className='deleteButton' onClick={(event) => handleClick (event, task.id)}>Delete</button>
            </li>
        ))}

        </ul>
        </div>
    )
}

export default List

