import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";
import HoverCard from "../../components/hoverCard/HoverCard";
import PagesHeader from "../../components/pagesHeader/PagesHeader";
import { StrategyData } from "../../Data/inedx";
import "./styles.css";

const renderInnovation = () => {
  return (
    <div>
      <div className="innovation-crads-container">
        <p className="innovation-text-styles">Innovation</p>
        <div className="innovation-card-row">
          {StrategyData.map((items) => {
            return (
              <div key={items.id} className="innovation-card-container">
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

const Innovation = () => {
  return (
    <div className="innovation-main-container">
      <PagesHeader
        title="Product Development"
        Descrpion="Supporting you on the path to digital transformation"
        sub_Descrpion="Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. "
      />
      {renderInnovation()}
      <Contect />
      <Footer />
    </div>
  );
};

export default Innovation;
