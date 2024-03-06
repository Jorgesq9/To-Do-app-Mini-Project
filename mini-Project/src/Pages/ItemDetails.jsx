import Task from "../assets/Tasks.json"
import { useParams } from "react-router-dom";

    const ItemsDetails = () => {
        const { itemId } = useParams();
      
        // Find the specific item in the Task array based on itemId
        const selectedItem = Task.find((item) => item.id === itemId);
      
        if (!selectedItem) {
          // Handle the case where the item with the given ID is not found
          return <p>Item not found</p>;
        }

    return (

        <div>

            <h2>Item Details</h2>
            <p>Item Id: {itemId}</p>
            <p>Description: {selectedItem.task}</p>
            <p>Completed: {selectedItem.completed ? "Yes" : "No"}</p>
        </div>
    )
}


export default ItemsDetails;