import { Link } from "react-router-dom";

const Sidebar = ({changePage}) => {

  
  return (
    <div className="Sidebar">
     
     <Link to="/"><button className="homeButton">Home</button></Link>
     <div className= "sideBarLines">|      |</div>
     <Link to="about"><button className="aboutButton">About</button></Link>
    </div>
  );
};

export default Sidebar;
