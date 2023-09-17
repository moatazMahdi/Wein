import "./Footer.css";
import FooterLogo from "../../assets/images/footerlogo.svg";
import { Link } from "react-router-dom";

interface WorkCategory {
  name: string;
  items: string[];
}

const footerData = [
  {
    Wein: ["Works", "Team", "Events", "About", "Contact"],
    Social: ["Behance", "Dribbble", "Instagram", "Facebook", "Twitter"],
    Legal: ["Privacy", "Terms", "Cookies", "License", "Program"],
  },
];

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-texts-container">
          <p>
            We love to explore new ways to engage with brands and reach new
            levels of creative outlets through development.
          </p>
        </div>
        <div className="footer-category-main">
          <div className="footer-category-container">
            <div className="footer-data-container">
              {footerData[0] &&
                Object.keys(footerData[0]).map((category, index) => (
                  <div key={index} className="footer-category">
                    <h2>{category}</h2>
                    <div className="footer-category-data">
                      {footerData[0][category].map((item, itemIndex) => (
                        <p key={itemIndex}>
                          <Link
                            to={`/${item.toLowerCase()}`}
                            className="link-no-style"
                          >
                            {item}
                          </Link>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-image">
        <img src={FooterLogo} alt="Footer Logo" />
      </div>
    </div>
  );
}

export default Footer;
