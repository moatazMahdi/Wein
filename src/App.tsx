import Home from "./pages/home/home";
import About from "./pages/About/About";
import OurTeam from "./Text";
import Ourclients from "./components/ourclients/Ourclients";
import Bolg from "./pages/Blog/Bolg";
import Strategy from "./pages/Strategy/Strategy";
import ProductDevelopment from "./pages/ProductDevelopment/ProductDevelopment";
import ContactUs from "./pages/ContactUs/ContactUs";
import Innovation from "./pages/Innovation/Innovation";
import DigitalContent from "./pages/DigitalContent/DigitalContent";
import OurWork from "./pages/OurWork/OurWork";
import { BrowserRouter } from "react-router-dom";
import RoutesNavegation from "./navegations/Routes";

function App() {
  return (
    <>
      <RoutesNavegation />
    </>
  );
}

export default App;
