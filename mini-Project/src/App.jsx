import { useState } from "react";
import "./App.css";
import "./index.css";

import { Routes, Route} from "react-router-dom"
import Navbar from "./Components/navBar";
import Footer from "./Components/footer";
import Sidebar from "./Components/sideBar";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Tasklist from "./Components/TaskList";
import NotFound from "./Pages/NotFound"
import ItemsDetails from "./Pages/ItemDetails";
import AddTaskForm from "./Components/AddTaskForm"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text }]);
  };

  const changePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div className="NavBar">
        <Navbar appName="Timecraft" />
      </div>
      <div className="SideBar">
        <Sidebar />
        </div>
        <section id = "toDo">
          <AddTaskForm addTask={addTask}/>

          <Routes>
            <Route path="/" element={<Home  />}/>
            <Route path="about" element={<About />} />
            <Route path="/ItemsDetails/:itemId"element={<ItemsDetails />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      <Footer />
    </>
  );
}
export default App;