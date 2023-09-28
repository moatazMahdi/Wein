import "./styles.css"; // Import your CSS file
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
        <div className="blog-hoverCared-item">
          <div className="blog-hoverCared-item-div">
            <p className="blog-hoverCared-title">{title}</p>
            <p className="blog-hoverCared-description">{description}</p>
            <div className="blog-hoverCared-item-learnMore">
              <p className="blog-hoverCared-learn-more">Learn more</p>
              <img src={ArrowIcon} alt="Arrow Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
