import "./Menu.css";
import { Link, useNavigate } from "react-router-dom"; // If using React Router for navigation

type MenuScreenProps = {
  isOpen: boolean;
  onClose: () => void;
  closeMenu: () => void;
};

function MenuScreen({ isOpen, onClose, closeMenu }: MenuScreenProps) {
  const menuClassName = isOpen ? "menu open" : "menu-container";
  const navigate = useNavigate();
  return (
    <nav className={menuClassName}>
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/about" onClick={onClose}>
            About
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/service" onClick={onClose}>
            Service
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/contact" onClick={onClose}>
            Contact Us
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/bolg" onClick={onClose}>
            BLOG
          </Link>
        </li>
        {/* Add more menu items as needed */}
        <button className="menu-close" onClick={closeMenu}>
          Close
        </button>
      </ul>
    </nav>
  );
}

export default MenuScreen;
