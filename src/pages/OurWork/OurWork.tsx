import PagesHeader from "../../components/pagesHeader/PagesHeader";
import "./styles.css";
import RightArow from "../../assets/images/rightArow.svg";
import LiftArow from "../../assets/images/laftArow.svg";
import { OurWorkdata } from "../../Data/inedx";
import { useEffect, useState } from "react";
import HoverCard from "../../components/hoverCard/HoverCard";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";

const renderOurWorkdata = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    OurWorkdata[0].category
  );
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    // This useEffect will run when the component mounts
    // Set the initial selected category to the first category in OurWork
    setSelectedCategory(OurWorkdata[0].category);
  }, []); // The empty dependency array ensures it runs only once on mount
  const projects = OurWorkdata.find(
    (item) => item.category === selectedCategory
  ).projects;
  return (
    <div>
      <div className="our-work-category-row">
        {OurWorkdata.map((item) => (
          <div
            key={item.category}
            className={`our-work-category-item ${
              selectedCategory === item.category
                ? "our-work-selected-category"
                : ""
            }`}
            onClick={() => handleCategoryClick(item.category)}
          >
            {item.category}
          </div>
        ))}
      </div>
      <div className="our-work-category-project-data">
        {projects.map((project) => (
          <div key={project.id} className="our-work-category-project">
            <HoverCard
              image={project.image}
              title={project.title}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const renderOurWork = () => {
  return (
    <div className="ourWork-container">
      <div className="our-work-row">
        <h1>Our Work</h1>
        <div className="our-work-arow">
          <img src={LiftArow} alt="LiftArow" />
          <img src={RightArow} alt="RightArow" />
        </div>
      </div>
      {renderOurWorkdata()}
    </div>
  );
};

const OurWork = () => {
  return (
    <div className="ourWork-main-container">
      <PagesHeader
        title="OUR WORK"
        Descrpion="Supporting you on the path to digital transformation"
        sub_Descrpion="Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. "
      />
      {renderOurWork()}
      <Contect />
      <Footer />
    </div>
  );
};

export default OurWork;
