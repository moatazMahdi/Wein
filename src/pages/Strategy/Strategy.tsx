import PagesHeader from "../../components/pagesHeader/PagesHeader";
import "./styles.css";
import { StrategyData } from "../../Data/inedx";
import HoverCard from "../../components/hoverCard/HoverCard";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";

const renderStrategyCard = () => {
  return (
    <div className="strategy-crads-container">
      <p className="strategy-text-styles">Strategy</p>
      <div className="strategy-card-row">
        {StrategyData.map((items) => {
          return (
            <div key={items.id} className="strategy-card-container">
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
  );
};

const Strategy = () => {
  return (
    <div className="strategy-main-container">
      <PagesHeader
        title="STRATEGY"
        Descrpion="Supporting you on the path to digital transformation"
        sub_Descrpion="Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. "
      />
      {renderStrategyCard()}
      <Contect />
      <Footer />
    </div>
  );
};

export default Strategy;
