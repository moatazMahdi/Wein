import PagesHeader from "../../components/pagesHeader/PagesHeader";
import "./styles.css";
import { ourService } from "../../Data/inedx";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const renderServiceData = () => {
  const navigate = useNavigate();
  const handleContactUsClick = (item) => {
    // Use the history object to navigate to the detailed view with the cardId, title, and description as route parameters
    navigate(`/service/${item.id}`, {
      state: {
        title: item.title,
        description: item.description,
        image: item.image,
      },
    });
    console.log({
      state: {
        title: item.title,
        description: item.description,
        image: item.image,
      },
    });
  };

  return (
    <div className="Service-main-category">
      {ourService.map((item, index) => (
        <div
          key={item.id}
          className={`Service-main-crad ${
            index % 2 === 0 ? "even-row" : "odd-row"
          }`}
        >
          <div
            className={`Service-content ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
          >
            <p className="Service-title">{item.title}</p>
            <p className="Service-description">{item.description}</p>
            <button
              className="button-ContactUs"
              onClick={() => handleContactUsClick(item)}
            >
              Contact Us
            </button>
          </div>
          <div className="Service-image">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

const Service = () => {
  return (
    <div className="Service-main-container">
      <PagesHeader
        title="SERVICES"
        Descrpion="Supporting you on the path to digital transformation"
        sub_Descrpion=""
      />
      {renderServiceData()}
      <Contect />
      <Footer />
    </div>
  );
};

export default Service;
