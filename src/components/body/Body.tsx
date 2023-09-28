import "./Body.css";
import Adobe from "../../assets/images/adobe.svg";
import Facebook from "../../assets/images/facebook.svg";
import Bing from "../../assets/images/bing.svg";
import Google from "../../assets/images/google.svg";
import Hubsopt from "../../assets/images/hubsopt.svg";
import Colum from "../../assets/images/colum.svg";
import { OurWorkData } from "../../Data/inedx";
import Ourclients from "../ourclients/Ourclients";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
interface WorkCategory {
  name: string;
  items: string[];
}
const renderOurWork = () => {
  const [visibleCategoryIndex, setVisibleCategoryIndex] = useState(0);

  const workCategories: WorkCategory[] = Object.keys(OurWorkData[0]).map(
    (category) => ({
      name: category,
      items: OurWorkData[0][category as keyof (typeof OurWorkData)[0]],
    })
  );

  const handleNextClick = () => {
    if (visibleCategoryIndex < workCategories.length - 1) {
      setVisibleCategoryIndex(visibleCategoryIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (visibleCategoryIndex > 0) {
      setVisibleCategoryIndex(visibleCategoryIndex - 1);
    }
  };
  const isMobile = window.innerWidth <= 480;

  return (
    <div className="category-container">
      {workCategories.map((categoryData, index) => (
        <div
          key={index}
          className="category"
          // style={{
          //   display:
          //     index === visibleCategoryIndex || isMobile ? "block" : "none",
          // }}
        >
          <h2>{categoryData.name}</h2>
          <div className="category-data">
            {categoryData.items.map((item, itemIndex) => (
              <p key={itemIndex}>{item}</p>
            ))}
          </div>
        </div>
      ))}
      {/* {isMobile && (
        <div className="navigation-buttons">
          <button
            onClick={handlePrevClick}
            disabled={visibleCategoryIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextClick}
            disabled={visibleCategoryIndex === workCategories.length - 1}
          >
            Next
          </button>
        </div>
      )} */}
    </div>
  );
};

const renderWorldSecction = () => {
  return (
    <div className="world-sction-container">
      <div className="world-sction-main">
        <h1>Growing all around the globe.</h1>
        <div className="world-sction-number">
          <div className="section">
            <div className="column">
              <p className="section-column-number">54</p>
            </div>
            <div className="column">
              <p className="section-column-text">Countries</p>
            </div>
          </div>
          <img src={Colum} alt="Your Image" className="image-between" />
          <div className="section">
            <div className="column">
              <p className="section-column-number">136</p>
            </div>
            <div className="column">
              <p className="section-column-text">Clients</p>
            </div>
          </div>
          <img src={Colum} alt="Your Image" className="image-between" />
          <div className="section">
            <div className="column">
              <p className="section-column-number">12</p>
            </div>
            <div className="column">
              <p className="section-column-text">Offices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Body = () => {
  const navigate = useNavigate();
  const brands = [Facebook, Google, Adobe, Hubsopt, Bing];

  return (
    <div className="main-contener">
      <div className="brands-row">
        {brands.map((item, index) => (
          <div key={index} className="container-Barnd-row">
            <img src={item} alt="" />
          </div>
        ))}
      </div>

      <div className="text-row">
        <p className="text-one">
          Your partner on the journey from now to what’s next
        </p>
        <p className="text-two">
          Rapid change creates uncertainty. But at Method, we believe it
          presents opportunity. From transforming existing experiences to
          innovating something completely new, our team collaborates to move
          your business forward today while building the capabilities needed to
          sustain your success in the future.
        </p>
      </div>
      {/* {renderimage()} */}
      {renderWorldSecction()}
      <div className="text-row">
        <p className="text-row-one">
          Strategy. Brand positioning. Design. Integration. Launch. No silver
          bullet. Just a passionate pursuit of excellence.
        </p>
        <p className="text-row-two">
          Your brand's story fuels our inspiration. Together, we bring it to
          life. Our A-team can tackle any task. If your needs aren't listed,
          just ask
        </p>
      </div>
      {renderOurWork()}
      <Ourclients />
    </div>
  );
};

export default Body;
