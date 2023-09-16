import React from "react";

interface CustomButton {
  text: string;
  fontSize: string;
  fontWeight: string;
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  onClick: () => void; // Add onClick prop
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
}: CustomButton) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
    padding: "10px 20px",
    border: "2px solid #ffff",
    cursor: "pointer",
    fontSize: fontSize,
    fontWeight: fontWeight,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "1px",
    width: width,
    height: height,
  };
  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
