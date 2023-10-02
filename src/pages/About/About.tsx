import "./style.css";
import Rowline from "../../assets/images/about/rowlinewithoutcolor.svg";
import { companyCulture, ourblogArticles } from "../../Data/inedx";
import RightImage from "../../../public/assets/images/about/rightimage.svg";
import CompanyCulture from "../../../public/assets/images/about/companyculture.svg";
import ArowIcon from "../../../public/assets/images/about/Icon.svg";
import CustomButton from "../../components/custombutton/customButton";
import Ourclients from "../../components/ourclients/Ourclients";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";
import OurTeam from "../../components/ourteam/OurTeam";
import PagesHeader from "../../components/pagesHeader/PagesHeader";

const About = () => {
  const rendercompanyCulture = () => {
    return (
      <div className="company-culture-container-main">
        <div className="company-culture-right-sction">
          <h2>Our work culture company’s</h2>
          <p>
            Like Steve Jobs quotes, “Design is not just what <br />
            it looks like and feels like. Design is how it works”. We always try
            to make a great output by this culture:
          </p>
          <div className="company-culture-container">
            <div className="left-column">
              {companyCulture.slice(0, 3).map((text, index) => (
                <div className="company-culture-service" key={index}>
                  <img src={RightImage} alt={`Image ${index}`} />
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="right-column">
              {companyCulture.slice(3).map((text, index) => (
                <div className="company-culture-service" key={index}>
                  <img src={RightImage} alt={`Image ${index}`} />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="company-culture-lift-sction">
          <img
            src={CompanyCulture}
            className="company-culture-lift-sction-img"
          />
        </div>
      </div>
    );
  };

  const renderBlog = () => {
    return (
      <div className="blog-container">
        <div className="blog-main">
          <div className="about-text-row">
            <img src={Rowline} />
            <p>BLOG</p>
          </div>
          <p className="blog-Read-text">Read Our Blog</p>
        </div>
        <div className="blog-article">
          {ourblogArticles.map((item, index) => {
            return (
              <div
                key={index}
                className="blog-article-item"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="blog-about-item-div">
                  <p>{item.name}</p>
                  <p className="blog-article-item-p">{item.description}</p>
                  <div className="blog-article-item-learnMore-botton">
                    <p>Learn more</p>
                    <img src={ArowIcon} />
                  </div>
                </div>
              </div>
            );
          })}
          <div
            className=" blog-article-CustomButton"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <CustomButton
              text="More Articles"
              fontSize="28px"
              fontWeight="700"
              width="334px"
              height="66px"
              backgroundColor="transparent"
              color="#fff"
              onClick={() => {
                alert("Senddddddddddd ");
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="about-main-container">
      <PagesHeader
        title="ABOUT"
        Descrpion="We help businesses and brands succeed in the digital age."
        sub_Descrpion=""
      />
      <div className="about-body-container">
        <OurTeam />
        {/* {renderMeetTeemSection()} */}
        {rendercompanyCulture()}
        {renderBlog()}
        <Ourclients />
        <Contect />
        <Footer />
      </div>
    </div>
  );
};

export default About;
