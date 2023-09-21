import "./Header.css";
import CustomButton from "../custombutton/customButton";
import Navbar from "../navbar/Navbar";
import Rowline from "../../assets/images/row.svg";
import Discover from "../../assets/images/discover.svg";
const Header = () => {
  return (
    <div className="home-contener-main">
      <Navbar />
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
              onClick={() => {
                // Define your click event handler here
                alert("lets, go ");
              }}
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
