import PagesHeader from "../../components/pagesHeader/PagesHeader";
import "./styles.css";
import { ProductDevelopmentData } from "../../Data/inedx";
import HoverCard from "../../components/hoverCard/HoverCard";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";

const ProductDevelopment = () => {
  return (
    <div className="ProductDevelopment-main-container">
      <PagesHeader
        title="Product Development"
        Descrpion="Supporting you on the path to digital transformation"
        sub_Descrpion="Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. "
      />
      <div className="ProductDevelopment-container">
        <p className="ProductDevelopment-text-styles">Product Development</p>
        <div className="ProductDevelopment-card-row">
          {ProductDevelopmentData.map((items) => {
            return (
              <div key={items.id} className="ProductDevelopment-card-container">
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
      <Contect />
      <Footer />
    </div>
  );
};

export default ProductDevelopment;
