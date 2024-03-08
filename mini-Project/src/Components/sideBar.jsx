import { Link } from "react-router-dom";

const Sidebar = ({changePage}) => {

  
  return (
    <div className="Sidebar">
     
     <Link to="/"><button>Home</button></Link>
     <Link to="about"><button>About</button></Link>
    </div>
  );
};

export default Sidebar;
