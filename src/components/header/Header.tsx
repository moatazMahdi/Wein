import "./Header.css";
import CustomButton from "../custombutton/customButton";
import Navbar from "../navbar/Navbar";
import Rowline from "../../assets/images/row.svg";
import Discover from "../../assets/images/discover.svg";
import { useState, useEffect } from "react";

type CustomButtonProps = {
  onClickLetsgo: () => void;
};

const Header: React.FC<CustomButtonProps> = ({ onClickLetsgo }) => {
  return (
    <div className="home-contener-main">
      <div className="home-contener">
        <div className="home-contan">
          <p className="text-center">Creating digital products and</p>
          <p className="text-Scaling">Scaling Intelligently</p>
          <p className="text-Together">
            Together we will go to conquer the
            <br />
            mountain peaks!
          </p>
          <div className="bottom-letsgo">
            <img
              className="row-line"
              src={Rowline}
              alt=""
              width="10%"
              height="auto"
            />
            <CustomButton
              text="Let’s go!"
              fontSize="18px"
              fontWeight="700"
              width="175px"
              height="62px"
              backgroundColor="transparent"
              color="#fff"
              onClick={onClickLetsgo}
              hoverBackgroundColor="#fff"
              hoverColor="#000"
              hoverStyle={{ boxShadow: "0px 0px 5px #888888" }}
            />
          </div>
          <div className="Discover-contener">
            <p>Discover more</p>
            <img src={Discover} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
