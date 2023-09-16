import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";
import HoverCard from "../../components/hoverCard/HoverCard";
import PagesHeader from "../../components/pagesHeader/PagesHeader";
import { StrategyData } from "../../Data/inedx";
import "./styles.css";

const renderDigitalContent = () => {
  return (
    <div>
      <div className="digitalContent-crads-container">
        <p className="digitalContent-text-styles">Digital Content</p>
        <div className="digitalContent-card-row">
          {StrategyData.map((items) => {
            return (
              <div key={items.id} className="digitalContent-card-container">
                {/* <img src={items.image} alt={items.title} /> */}
                <HoverCard
                  image={items.image}
                  title={items.title}
                  description={items.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const DigitalContent = () => {
  return (
    <div className="digitalContent-main-container">
      <PagesHeader
        title="Digital Content"
        Descrpion="Supporting you on the path to digital transformation"
        sub_Descrpion="Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. "
      />
      {renderDigitalContent()}
      <Contect />
      <Footer />
    </div>
  );
};

export default DigitalContent;
