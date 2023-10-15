import "./Menu.css";
import { Link } from "react-router-dom"; // If using React Router for navigation

type MenuScreenProps = {
  isOpen: boolean;
  onClose: () => void;
  closeMenu: () => void;
};

function MenuScreen({ isOpen, onClose, closeMenu }: MenuScreenProps) {
  const menuClassName = isOpen ? "menu-open" : "menu-container";
  const newMenu = isOpen ? "menu open" : "menu";
  const isMobile = window.innerWidth <= 480;

  const scrollToTop = () => {
    if (window.location.pathname === "/") {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
    onClose(); // Close the menu
  };

  return (
    <div className={newMenu}>
      <nav className={menuClassName}>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/about" onClick={scrollToTop}>
              About
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/service" onClick={scrollToTop}>
              Service
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/bolg" onClick={scrollToTop}>
              BLOG
            </Link>
            {isMobile && (
              <button className="menu-close" onClick={closeMenu}>
                Close
              </button>
            )}
          </li>
        </ul>
      </nav>
      {isMobile && (
        <li className="menu-item-Contact">
          <Link to="/contact" onClick={onClose}>
            Contact Us
          </Link>
        </li>
      )}
    </div>
  );
}

export default MenuScreen;
