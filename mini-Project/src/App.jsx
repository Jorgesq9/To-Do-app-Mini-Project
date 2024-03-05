import { useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./Components/navBar";
import Footer from "./Components/footer";
import Sidebar from "./Components/sideBar";
import Home from "./Components/Home";
import About from "./Components/About"
import Tasklist from "./Components/TaskList";

function App() {

  const [currentPage, setCurrentPage] = useState("home")

  const changePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div className="NavBar">
        <Navbar appName="Timecraft" />
      </div>
      <div className="SideBar">
        <Sidebar changePage={changePage}/>
        {currentPage === "Home" && <Home />}
        {currentPage === "About" && <About />}
      </div>
      <section id = "toDo">
      <Tasklist />
      </section>
      <Footer />
    </>
  );
}
export default App;
