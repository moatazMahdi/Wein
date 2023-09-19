import Navbar from "../../components/navbar/Navbar";
import "./styles.css";
import Rowline from "../../assets/images/about/rowlinewithoutcolor.svg";
import { OurTags, OurBlogs } from "../../Data/inedx";
import CustomButton from "../../components/custombutton/customButton";
import CorrectIcon from "../../assets/images/correct.svg";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";

const renderTags = () => {
  return (
    <div>
      <div className="our-tags">
        <h1>Popular Tags :</h1>
        {OurTags.map((items) => {
          return <div className="our-tags-card">{items}</div>;
        })}
      </div>
      <div className="blog-main-rows">
        {OurBlogs.map((blogs) => {
          return (
            <div className="blog-main-card-wrapper">
              <div className="blog-main-card">
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
        />
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="blogs-container">
      <Navbar />
      <div className="blog-main-secsion">
        <div className="about-text-container">
          <div className="about-text-row">
            <img src={Rowline} />
            <p>BLOG</p>
          </div>
          <p className="about-text-demo">
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

export default Blog;
