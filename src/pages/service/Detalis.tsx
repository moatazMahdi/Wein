import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

interface CardData {
  title?: string; // Make sure to handle potential missing properties
  description?: string; // Make sure to handle potential missing properties
  // Add more properties as needed
}

const Detalis = ({}) => {
  const { cardId } = useParams();
  const location = useLocation();
  const { title, description, image } = location.state || {};

  console.log("cardId", cardId);
  console.log("title", description);

  return (
    <div className="service-details">
      <h2>Service Details for Card ID: {cardId}</h2>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <img src={image} alt="snocda mscjisac ahis" />
      {/* Additional details can be displayed here */}
    </div>
  );
};

export default Detalis;
