import { OurClients } from "../../Data/inedx";
import RightArow from "../../assets/images/rightArow.svg";
import LiftArow from "../../assets/images/laftArow.svg";
import "./styles.css";
import { useEffect, useState } from "react";

const Ourclients = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleClients, setVisibleClients] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth <= 480 ? 4 : 8
  );

  useEffect(() => {
    const end = Math.min(startIndex + itemsPerPage, OurClients.length);
    setVisibleClients(OurClients.slice(startIndex, end));
  }, [startIndex]);

  const handleNextClick = () => {
    if (startIndex + itemsPerPage < OurClients.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrevClick = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="our-client-contener-main">
      <div className="our-clients-row">
        <h1>our clients</h1>
        {window.innerWidth > 480 ? (
          <div className="our-clients-arow">
            <img src={LiftArow} alt="LiftArow" onClick={handlePrevClick} />
            <img src={RightArow} alt="RightArow" onClick={handleNextClick} />
          </div>
        ) : null}
      </div>
      <div className="our-clients-images">
        {visibleClients.map((image, index) => {
          return (
            <div className="our-clients-logo" key={index}>
              <img
                src={image}
                alt={`Client Logo ${index + startIndex + 1}`}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
      {window.innerWidth <= 480 ? (
        <div className="our-clients-arow">
          <img src={LiftArow} alt="LiftArow" onClick={handlePrevClick} />
          <img src={RightArow} alt="RightArow" onClick={handleNextClick} />
        </div>
      ) : null}
    </div>
  );
};

export default Ourclients;
