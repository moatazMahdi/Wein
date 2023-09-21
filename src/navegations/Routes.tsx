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

const RoutesNavegation = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Bolg" element={<Bolg />} />
        <Route path="/DigitalContent" element={<DigitalContent />} />
        <Route path="/Innovation" element={<Innovation />} />
        <Route path="/Works" element={<OurWork />} />
        <Route path="/ProductDevelopment" element={<ProductDevelopment />} />
        <Route path="/Strategy" element={<Strategy />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesNavegation;
