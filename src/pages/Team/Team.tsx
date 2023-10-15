import PagesHeader from "../../components/pagesHeader/PagesHeader";
import "./styles.css";
import Rowline from "../../assets/images/about/rowlinewithoutcolor.svg";
import RightArow from "../../assets/images/rightArow.svg";
import LiftArow from "../../assets/images/laftArow.svg";
import { useState } from "react";
import { OurTeamdata } from "../../Data/inedx";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";

const renderOurTeamData = () => {
  const [selectedCountry, setSelectedCountry] = useState(
    OurTeamdata[0].country
  );

  const handleCategoryClick = (country: string) => {
    setSelectedCountry(country);
  };

  const selectedTeam = OurTeamdata.find(
    (item) => item.country === selectedCountry
  );

  const projects = selectedTeam?.team || [];

  return (
    <div>
      <div className="our-team-category-row">
        {OurTeamdata.map((item) => (
          <div
            key={item.country}
            className={`our-work-category-item ${
              selectedCountry === item.country
                ? "our-work-selected-category"
                : ""
            }`}
            onClick={() => handleCategoryClick(item.country)}
          >
            {item.country}
          </div>
        ))}
      </div>
      <div className="our-team-category-project-data">
        {projects.map((project) => (
          <div key={project.id} className="our-team-category-project">
            <div className="our-team-card">
              <div className="our-team-card-left">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="our-team-card-right">
                <p className="our-team-name">{project.name}</p>
                <p className="our-team-jobTiltle">{project.jobTiltle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderOurTeam = () => {
  return (
    <div>
      <div className="meet-the-teem-rowText">
        <img src={Rowline} alt="" />
        <p>MEET THE TEAM</p>
      </div>
      <div className="our-teem-div">
        <p className="our-teem-text">Our team always making magic</p>
        <div className="arrow-container">
          <img src={LiftArow} alt="LeftArrow" />
          <img src={RightArow} alt="RightArrow" />
        </div>
      </div>
      {renderOurTeamData()}
    </div>
  );
};
const Team = () => {
  return (
    <div className="team-main-container">
      <PagesHeader
        title="TEAM"
        Descrpion="Meet the mighty Wein team always making magic"
        sub_Descrpion=""
      />
      {renderOurTeam()}
      <Contect />
      <Footer />
    </div>
  );
};

export default Team;
