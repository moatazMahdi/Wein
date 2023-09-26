import "./Menu.css";
import { Link, useNavigate } from "react-router-dom"; // If using React Router for navigation

function MenuScreen() {
  const navigate = useNavigate();
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/service">Service</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </nav>
  );
}

export default MenuScreen;
