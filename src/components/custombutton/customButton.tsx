import { CSSProperties, useState } from "react";

interface CustomButtonProps {
  text: string;
  fontSize: string;
  fontWeight: string;
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  onClick: () => void;
  hoverBackgroundColor: string;
  hoverColor: string;
  hoverStyle: CSSProperties; // New prop for hover styles
}

const CustomButton = ({
  text,
  fontSize,
  fontWeight,
  width,
  height,
  backgroundColor,
  color,
  onClick,
}: CustomButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "#ffffff" : backgroundColor,
    color: isHovered ? "#000000" : color,
    padding: "10px 20px",
    border: "2px solid #ffffff",
    cursor: "pointer",
    fontSize,
    fontWeight,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "1px",
    width,
    height,
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=""
    >
      {text}
    </button>
  );
};

export default CustomButton;

// export default CustomButton;
