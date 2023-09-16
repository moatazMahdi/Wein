import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/home"; // Replace with the actual path to your Home component
import About from "../pages/About/About"; // Replace with the actual path to your About component

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Add more routes for additional screens */}
    </Routes>
  );
};
c;

export default Routes;
