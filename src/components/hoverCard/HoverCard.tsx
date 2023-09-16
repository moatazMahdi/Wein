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
        <div className="blog-article-item">
          <div className="blog-article-item-div">
            <p className="blog-article-title">{title}</p>
            <p className="blog-article-description">{description}</p>
            <div className="blog-article-item-learnMore">
              <p className="blog-article-learn-more">Learn more</p>
              <img src={ArrowIcon} alt="Arrow Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
