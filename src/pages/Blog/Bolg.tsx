import Navbar from "../../components/navbar/Navbar";
import "./styles.css";
import Rowline from "../../assets/images/about/rowlinewithoutcolor.svg";
import { OurTags, OurBlogs } from "../../Data/inedx";
import CustomButton from "../../components/custombutton/customButton";
import CorrectIcon from "../../assets/images/correct.svg";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import MenuIcon from "../../assets/images/menu.svg";
import CloseIcon from "../../assets/images/CloseIcon.svg";

const renderTags = () => {
  const [showTags, setShowTags] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const toggleTagsVisibility = () => {
    setShowTags(!showTags);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="our-tags-main">
        <div className="our-tags">
          <h1>Popular Tags :</h1>
          {isMobile ? (
            <div>
              {!showTags && (
                <img src={MenuIcon} alt="icon" onClick={toggleTagsVisibility} />
              )}
              {showTags && (
                <>
                  <img
                    src={CloseIcon}
                    alt="icon"
                    onClick={toggleTagsVisibility}
                  />

                  <div className={`our-tags-filter ${showTags ? "show" : ""}`}>
                    {OurTags.map((items, index) => {
                      return (
                        <div className="our-tags-card-filter" key={index}>
                          {items}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          ) : null}
        </div>
        <div className="blog-main-rows-mob">
          {OurBlogs.map((blogs) => {
            return (
              <div className="blog-main-card-mob">
                <img src={blogs.image} className="blog-main-card-img" />
                <div className="blog-main-card-container">
                  <p className="blog-main-card-title">{blogs.title}</p>
                  <p className="blog-main-card-description">
                    {blogs.description}
                  </p>
                  <div className="blog-main-card-avatarSection">
                    <div className="blog-card-username-section">
                      <img src={blogs.userImage} />
                      <div className="blog-user-name-section">
                        <p className="blog-user-name-section-p">{blogs.name}</p>
                        <div className="blog-jobtitle-row">
                          <img src={CorrectIcon} />
                          <p>{blogs.jobtitle}</p>
                        </div>
                      </div>
                    </div>
                    <p className="blog-card-date">{blogs.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
              // Define your click event handler here
              alert("Senddddddddddd ");
            }}
            hoverBackgroundColor={""}
            hoverColor={""}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="our-tags-main">
      <div className="our-tags">
        <h1>Popular Tags :</h1>
        {isMobile ? (
          <div>
            <img src={MenuIcon} alt="" onClick={toggleTagsVisibility} />
            {showTags && (
              <div className={`our-tags-filter ${showTags ? "show" : ""}`}>
                {OurTags.map((items, index) => {
                  return (
                    <div className="our-tags-card-filter" key={index}>
                      {items}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <>
            {OurTags.map((items) => {
              return <div className="our-tags-card">{items}</div>;
            })}
          </>
        )}
      </div>
      <div className="blog-main-rows">
        {OurBlogs.map((blogs) => {
          return (
            <div className="blog-main-card">
              <img
                src={blogs.image}
                className="blog-main-card-img"
                alt="sakjbcs acjisakcbsa hiclvas,n"
              />
              <div className="blog-main-card-container">
                <p className="blog-main-card-title">{blogs.title}</p>
                <p className="blog-main-card-description">
                  {blogs.description}
                </p>
                <div className="blog-main-card-avatarSection">
                  <div className="blog-card-username-section">
                    <img src={blogs.userImage} />
                    <div className="blog-user-name-section">
                      <p className="blog-user-name-section-p">{blogs.name}</p>
                      <div className="blog-jobtitle-row">
                        <img src={CorrectIcon} />
                        <p>{blogs.jobtitle}</p>
                      </div>
                    </div>
                  </div>
                  <p className="blog-card-date">{blogs.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
          hoverBackgroundColor={""}
          hoverColor={""}
        />
      </div>
    </div>
  );
};

const Bolg = () => {
  return (
    <div className="blogs-container">
      <Navbar
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="blog-main-secsion">
        <div className="blog-text-container">
          <div className="blog-text-row">
            <img src={Rowline} />
            <p>BLOG</p>
          </div>
          <p className="blog-text-demo">
            We help businesses and brands succeed in the digital age.
          </p>
        </div>
        {renderTags()}
      </div>
      <Contect />
      <Footer />
    </div>
  );
};

export default Bolg;
