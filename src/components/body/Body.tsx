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
import { useState, useEffect, useRef } from "react";
import RightArow from "../../assets/images/rightArow.svg";
import LiftArow from "../../assets/images/laftArow.svg";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";

interface WorkCategory {
  name: string;
  items: string[];
}
interface AnimatedSectionProps {
  number: string;
  text: string;
}

const renderOurWork = () => {
  const [visibleCategoryIndex, setVisibleCategoryIndex] = useState(0);

  const workCategories: WorkCategory[] = Object.keys(OurWorkData[0]).map(
    (category) => ({
      name: category,
      items: OurWorkData[0][category as keyof (typeof OurWorkData)[0]],
    })
  );
  const intersectionRefs = Array(workCategories.length)
    .fill(0)
    .map(() => useRef(null));

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index"));
          setVisibleCategoryIndex(index);
        }
      });
    };

    // Create and attach IntersectionObserver instances for each category
    intersectionRefs.forEach((ref) => {
      const observer = new IntersectionObserver(callback, observerOptions);
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Clean up the observers when unmounting
    return () => {
      intersectionRefs.forEach((ref) => {
        if (ref.current) {
          ref.current = null;
        }
      });
    };
  }, []);
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

  // Show only the currently visible category
  const visibleCategory = workCategories[visibleCategoryIndex];
  const progressWidth = `${
    (visibleCategoryIndex / (workCategories.length - 1)) * 100
  }%`;

  return (
    <div className="main-renderOurWork">
      {isMobile ? (
        <div className="category-container">
          <div className="category">
            <h2>{visibleCategory.name}</h2>
            <div className="category-data">
              {visibleCategory.items.map((item, itemIndex) => (
                <p key={itemIndex}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="category-container">
          {workCategories.map((categoryData, index) => (
            <div
              key={index}
              className={`category ${
                index === visibleCategoryIndex ? "active fade-in" : "non-active"
              }`}
              data-index={index}
              ref={intersectionRefs[index]}
            >
              <h2
                className={`category-h2 ${
                  index === visibleCategoryIndex
                    ? "active fade-in"
                    : "non-active"
                }`}
              >
                {categoryData.name}
              </h2>
              <div className="category-data">
                {categoryData.items.map((item, itemIndex) => (
                  <p
                    key={itemIndex}
                    className={`category-data-p ${
                      index === visibleCategoryIndex
                        ? "active fade-in"
                        : "non-active"
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="progress-bar">
        <div className="progress" style={{ width: progressWidth }}></div>
      </div>
      {isMobile && (
        <div className="prev-next-buttons">
          <div className="our-work-arow">
            <img src={LiftArow} alt="LiftArow" onClick={handlePrevClick} />
            <img src={RightArow} alt="RightArow" onClick={handleNextClick} />
          </div>
        </div>
      )}
    </div>
  );
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ number, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible: boolean) => {
    setIsVisible(isVisible);
  };

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={handleVisibilityChange}
    >
      <div className={`section ${isVisible ? "fade-in active" : "fade-in"}`}>
        <div className="column">
          <CountUp
            className="section-column-number"
            start={0}
            end={isVisible ? parseInt(number) : 0}
            duration={4}
          />
          {/* <p className="section-column-number">{number}</p> */}
        </div>
        <div className="column">
          <p className="section-column-text">{text}</p>
        </div>
      </div>
    </VisibilitySensor>
  );
};

const renderWorldSecction = () => {
  return (
    <div className="world-sction-container">
      <div className="world-sction-main">
        <h1>Growing all around the globe.</h1>
        <div className="world-sction-number">
          <AnimatedSection number="54" text="Countries" />
          <img src={Colum} alt="Your Image" className="image-between" />
          <AnimatedSection number="136" text="Clients" />
          <img src={Colum} alt="Your Image" className="image-between" />
          <AnimatedSection number="12" text="Offices" />
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  const brands = [Facebook, Google, Adobe, Hubsopt, Bing];

  return (
    <div className="main-contener">
      <Helmet>
        <meta
          name="description"
          content="A brief description of your home page."
        />
        <meta name="keywords" content="relevant, keywords, here" />
      </Helmet>
      <section id="brands">
        <div className="brands-row">
          {brands.map((item, index) => (
            <div key={index} className="container-Barnd-row">
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section id="text-row-1">
        <div className="text-row">
          <p className="text-one">
            Your partner on the journey from now to what’s next
          </p>
          <p className="text-two">
            Rapid change creates uncertainty. But at Method, we believe it
            presents opportunity. From transforming existing experiences to
            innovating something completely new, our team collaborates to move
            your business forward today while building the capabilities needed
            to sustain your success in the future.
          </p>
        </div>
      </section>

      {/* {renderimage()} */}
      <section id="world-section">{renderWorldSecction()}</section>
      <section id="text-row-2">
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
      </section>
      <section id="our-work">{renderOurWork()}</section>
      <section id="our-clients">
        <Ourclients />
      </section>
    </div>
  );
};

export default Body;
