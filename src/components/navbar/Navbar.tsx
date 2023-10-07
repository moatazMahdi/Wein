import Logo from "../../assets/images/logo.svg";
import MenuIcon from "../../assets/images/menu.svg";
import "./Navbar.css";
import CustomButton from "../custombutton/customButton";
import { useEffect, useState } from "react";
import MenuScreen from "../menu/menu";
import { Link } from "react-router-dom";

type CustomButtonProps = {
  onClick: () => void;
};

const Navbar: React.FC<CustomButtonProps> = ({ onClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Add a resize event listener to detect screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="image-row">
      <div className="left-images">
        <Link to="/">
          <img src={Logo} alt="Logo" className="image" />
        </Link>
      </div>
      {isMobile ? (
        <div className="right-image-mobile">
          {isMenuOpen && (
            <div className="menu-content">
              <MenuScreen
                closeMenu={closeMenu}
                onClose={closeMenu}
                isOpen={true}
              />
            </div>
          )}
          {!isMenuOpen && (
            <div onClick={toggleMenu}>
              <img src={MenuIcon} alt="Menu" className="menu-image" />
            </div>
          )}

          <div className="CustomButton"></div>
        </div>
      ) : (
        <div className="right-image">
          {/* {isMenuOpen && (
          <button className="menu-close" onClick={closeMenu}>
            Close
          </button>
        )} */}
          {isMenuOpen && (
            <div className="menu-content">
              <MenuScreen
                closeMenu={closeMenu}
                onClose={closeMenu}
                isOpen={true}
              />
            </div>
          )}
          {!isMenuOpen && (
            <div onClick={toggleMenu}>
              <img src={MenuIcon} alt="Menu" className="menu-image" />
            </div>
          )}

          <div className="CustomButton">
            <CustomButton
              text="Contact Us"
              fontSize="16px"
              fontWeight="bold"
              width="157px"
              height="48px"
              backgroundColor="transparent"
              color="#fff"
              onClick={onClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
