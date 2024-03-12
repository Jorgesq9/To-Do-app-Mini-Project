import appLogo from "../assets/time_craft_logo_white.png";
import "/src/App.css";

const Navbar = ({ appName }) => {
  return (
    <div className="NavBar">
      <img src={appLogo} alt="logo" className="appLogo" />
      <h1>{`${appName}`}</h1>
    </div>
  );
};

export default Navbar;
