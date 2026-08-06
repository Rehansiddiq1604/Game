import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          <h1>ZOOM</h1>
        </Link>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/genres">Genres</Link>
        </li>

        <li>
          <Link to="/adventure">Adventure</Link>
        </li>

        <li>
          <Link to="/action">Action</Link>
        </li>

        <li>
          <Link to="/sports">Sports</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

      </ul>

      <div className="nav-right">

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