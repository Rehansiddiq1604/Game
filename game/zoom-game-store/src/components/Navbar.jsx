import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>ZOOM</h1>
      </div>

      <ul className="menu">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/store">STORE</Link></li>
        <li><Link to="/genres">CATEGORIES</Link></li>
        <li><Link to="/cart">CART</Link></li>
      </ul>

      <div className="rightSide">
        <input
          type="text"
          placeholder="Search games..."
        />
        <button>LOGIN</button>
      </div>
    </nav>
  );
}

export default Navbar;