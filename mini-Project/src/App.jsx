import { useState } from "react";
import "./App.css";
import Navbar from "./Components/navBar";
import Footer from "./Components/footer";
import Sidebar from "./Components/sideBar";

function App() {
  return (
    <>
      <div className="NavBar">
        <Navbar appName="Timecraft" />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}
export default App;
