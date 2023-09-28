import "./styles.css";
import Navbar from "../navbar/Navbar";
import Rowline from "../../assets/images/about/rowlinewithoutcolor.svg";

interface PagesHeaderProps {
  title: string;
  Descrpion: string;
  sub_Descrpion: string;
}

const PagesHeader = ({ title, Descrpion, sub_Descrpion }: PagesHeaderProps) => {
  const isShowen = true;
  return (
    <>
      <div className="PagesHeader-main-container">
        <div className="PagesHeader-container">
          <div className="PagesHeader-Navbar">
            <Navbar />
          </div>
          <div className="PagesHeader-text-container">
            <div className="PagesHeader-text-row">
              <img src={Rowline} alt="Image" />
              <p>{title}</p>
            </div>
            <p className="PagesHeader-text-demo">{Descrpion}</p>
            {isShowen ? (
              <p className="PagesHeader-sub-Descrpion"> {sub_Descrpion}</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesHeader;
