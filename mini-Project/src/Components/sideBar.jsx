
const Sidebar = ({changePage}) => {

  
  return (
    <div className="Sidebar">
     <a href="/Home" onClick={ () => changePage ('Home')}>Home</a>
     <a href="/About" onClick={ () => changePage ('About')}>About</a>
    </div>
  );
};

export default Sidebar;
