import "./Navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home">
        <img src={logo} alt="" height="50" />
      </Link>
      <div className="navbar__options">
        <Link style={{ textDecoration: "none" }} to="/home">
          <Button style={{ height: 50, color: "white", outlineWidth: 0 }}>Home</Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/gallery">
          <Button style={{ height: 50, color: "white", outlineWidth: 0 }}>Gallery</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
