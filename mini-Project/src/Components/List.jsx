
import ListElement from './ListElement'
import { Link } from 'react-router-dom'

const List = ({tasks, onDelete}) => {
    return (
        <div>

        <h2>Task List</h2>
        <ul>

        {tasks && tasks.map((task) => (
            <li key={task.id}>
            <Link to={`/ItemsDetails/${task.id}`}>

            <ListElement key={task.id} task={task} onDelete={onDelete} />
            </Link>
            </li>
        ))}

        </ul>
        </div>
    )
}

export default List

