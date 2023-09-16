import React from "react";
import "./Text.css";
import { ourTeemData } from "./Data/inedx";

const WorkCards = ({ teamMember }) => {
  const { name, jobs, image } = teamMember;

  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt={name} /> {/* Display the team member's image */}
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

const Text = () => {
  return (
    <div className="card-container">
      {ourTeemData.map((teamMember, index) => (
        <WorkCards key={index} teamMember={teamMember} />
      ))}
    </div>
  );
};

export default Text;
