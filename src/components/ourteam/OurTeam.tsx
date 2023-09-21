import RightArow from "../../assets/images/rightArow.svg";
import LiftArow from "../../assets/images/laftArow.svg";
import Rowline from "../../assets/images/about/rowlinewithoutcolor.svg";
import { ourTeemData } from "../../Data/inedx";
import "./styles.css";
import { useEffect, useState } from "react";

const OurTeam = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [data, setData] = useState(ourTeemData);

  const itemsPerPage = 4;

  const handleNextClick = () => {
    if (startIndex + itemsPerPage < ourTeemData.length) {
      console.log("hui");

      setStartIndex(startIndex + itemsPerPage);
    }
  };
  console.log(startIndex);

  const handlePrevClick = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  useEffect(() => {
    console.log(startIndex);

    const visibleTeamMembers = ourTeemData.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    console.log(visibleTeamMembers);

    setData([...visibleTeamMembers]);
  }, [startIndex]);

  return (
    <div className="meet-teems">
      <div className="meet-the-teem-rowText">
        <img src={Rowline} alt="" />
        <p>MEET THE TEAM</p>
      </div>
      <div className="our-teem-div">
        <p className="our-teem-text">Our team always making magic</p>
        <div className="arrow-container">
          <img src={LiftArow} alt="LeftArrow" onClick={handlePrevClick} />
          <img src={RightArow} alt="RightArrow" onClick={handleNextClick} />
        </div>
      </div>
      <div className="our-team">
        <div className="our-teem-row">
          {data.map((teamMember, index) => (
            <div className="team-member" key={index}>
              <img src={teamMember.image} alt={teamMember.name} />
              <p className="team-member-name">{teamMember.name}</p>
              <p className="team-member-jobs">{teamMember.jobs.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
