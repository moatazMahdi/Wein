import PagesHeader from "../../components/pagesHeader/PagesHeader";
import "./styles.css";
import RightArow from "../../assets/images/rightArow.svg";
import LiftArow from "../../assets/images/laftArow.svg";

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
      <button title="om ahmed " />
    </div>
  );
};

export default OurWork;
