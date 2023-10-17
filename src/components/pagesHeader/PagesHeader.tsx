import "./styles.css";
import Navbar from "../navbar/Navbar";
import Rowline from "../../assets/images/about/rowlinewithoutcolor.svg";
import { useEffect, useState } from "react";

interface PagesHeaderProps {
  title: string;
  Descrpion: string;
  sub_Descrpion: string;
}

const PagesHeader = ({ title, Descrpion, sub_Descrpion }: PagesHeaderProps) => {
  const [isShowen, setIsShowen] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show Navbar
        setIsShowen(true);
      } else {
        // Scrolling down, hide Navbar
        setIsShowen(false);
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="PagesHeader-main-container">
        <div className="PagesHeader-container">
          <div className={`new-navBar ${isShowen ? "" : "hidden"}`}>
            <Navbar
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="PagesHeader-Navbar"></div>
          <div className="PagesHeader-text-container">
            <div className="PagesHeader-text-row">
              <img src={Rowline} alt="Image" />
              <p>{title}</p>
            </div>
            <p className="PagesHeader-text-demo">{Descrpion}</p>
            <p className="PagesHeader-sub-Descrpion"> {sub_Descrpion}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesHeader;
