import "./Footer.css";
import FooterLogo from "../../assets/images/footerlogo.svg";
import { Link } from "react-router-dom";

interface WorkCategory {
  name: string;
  items: string[];
}

const footerData: WorkCategory[] = [
  {
    name: "Wein",
    items: ["Works", "Team", "Events", "About", "Contact"],
  },
  {
    name: "Social",
    items: ["Behance", "Dribbble", "Instagram", "Facebook", "Twitter"],
  },
  {
    name: "Legal",
    items: ["Privacy", "Terms", "Cookies", "License", "Program"],
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
              {footerData.map((category, index) => (
                <div key={index} className="footer-category">
                  <h2>{category.name}</h2>
                  <div className="footer-category-data">
                    {category.items.map((item, itemIndex) => (
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
