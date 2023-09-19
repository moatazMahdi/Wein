import { I18nextProvider } from "react-i18next";
import Home from "./pages/home/home";
import About from "./pages/About/About";
import OurTeam from "./Text";
import Ourclients from "./components/ourclients/Ourclients";
import Strategy from "./pages/Strategy/Strategy";
import ProductDevelopment from "./pages/ProductDevelopment/ProductDevelopment";
import ContactUs from "./pages/ContactUs/ContactUs";
import Innovation from "./pages/Innovation/Innovation";
import DigitalContent from "./pages/DigitalContent/DigitalContent";
import OurWork from "./pages/OurWork/OurWork";
import Services from "./pages/Services/Services";
import RoutesNavegation from "./navegations/Routes";
import I18n from "./Language/I18n";
import Blog from "./pages/Blog/Bolg";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

function App() {
  return (
    <I18nextProvider i18n={I18n}>
      <HelmetProvider>
        <div className="Main-App">
          <RoutesNavegation />
          {/* <Home /> */}
          {/* <div>dsfcsd cuhsdkcm dscvdsghb</div> */}
        </div>
      </HelmetProvider>
    </I18nextProvider>
  );
}

export default App;
