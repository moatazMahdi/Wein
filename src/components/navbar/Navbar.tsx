import Logo from "../../assets/images/logo.svg";
import MenuIcon from "../../assets/images/menu.svg";
import "./Navbar.css";
import CustomButton from "../custombutton/customButton";
import { useState } from "react";
import MenuScreen from "../menu/menu";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="image-row">
      <div className="left-images">
        <img src={Logo} alt="Logo" className="image" />
      </div>
      <div className="right-image">
        <div onClick={toggleMenu}>
          <img src={MenuIcon} alt="Menu" className="menu-image" />
        </div>
        {isMenuOpen && (
          <div className="menu-content">
            <button className="menu-close" onClick={closeMenu}>
              Close
            </button>
            <MenuScreen />
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
            onClick={() => {
              // Define your click event handler here
              alert("Contact Us ");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
