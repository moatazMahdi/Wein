import Header from "../../components/header/Header";
import "./Home.css";
import Body from "../../components/body/Body";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div className="home-contener-main">
      <Header />
      <Body />
      <Contect />
      <Footer />
    </div>
  );
};
export default Home;
