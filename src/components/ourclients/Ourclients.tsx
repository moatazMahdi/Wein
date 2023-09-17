import { OurClients } from "../../Data/inedx";
import RightArow from "../../assets/images/rightArow.svg";
import LiftArow from "../../assets/images/laftArow.svg";
import "./styles.css";

const Ourclients = () => {
  return (
    <div className="our-client-contener-main">
      <div className="our-clients-row">
        <h1>our clients</h1>
        <div className="our-clients-arow">
          <img src={LiftArow} alt="LiftArow" />
          <img src={RightArow} alt="RightArow" />
        </div>
      </div>
      <div className="our-clients-images">
        {OurClients.map((image, index) => {
          return (
            <div className="our-clients-logo" key={index}>
              <img src={image} alt={`Client Logo ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ourclients;
