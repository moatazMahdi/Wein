import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs/ContactUs";
import Bolg from "../pages/Blog/Bolg";
import DigitalContent from "../pages/DigitalContent/DigitalContent";
import Innovation from "../pages/Innovation/Innovation";
import OurWork from "../pages/OurWork/OurWork";
import ProductDevelopment from "../pages/ProductDevelopment/ProductDevelopment";
import Strategy from "../pages/Strategy/Strategy";
import Team from "../pages/Team/Team";
import Service from "../pages/service/Service";
import Detalis from "../pages/service/Detalis";
import ScrollToTop from "../utils/ScrollToTop";

const RoutesNavegation = () => {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/bolg" element={<Bolg />} />
        <Route path="/digitalContent" element={<DigitalContent />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/works" element={<OurWork />} />
        <Route path="/productDevelopment" element={<ProductDevelopment />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/team" element={<Team />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:cardId" element={<Detalis />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesNavegation;
