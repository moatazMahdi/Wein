import "./HoverCard.css";
import ArrowIcon from "../../assets/images/whitearrow.svg";

interface hoverCardProps {
  image: string;
  title: string;
  description: string;
}
const HoverCard = ({ image, title, description }: hoverCardProps) => {
  return (
    <div className="hoverCard-container">
      <div
        className="hoverCard-main-container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hoverCard-article-item">
          <div className="hoverCard-article-item-div">
            <p className="hoverCard-article-title">{title}</p>
            <p className="hoverCard-article-description">{description}</p>
            <div className="hoverCard-article-item-learnMore">
              <p className="hoverCard-article-learn-more">Learn more</p>
              <img src={ArrowIcon} alt="Arrow Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
