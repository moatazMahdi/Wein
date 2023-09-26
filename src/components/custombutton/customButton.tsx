interface CustomButton {
  text: string;
  fontSize: string;
  fontWeight: string;
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  onClick: () => void;
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
  const buttonStylewithBackground = {
    backgroundColor:
      "linear-gradient(89deg, #E64124 0.72%, #3F1BDD 51.32%, #3F1BDD 98.86%)",
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
  const withBackground = true;
  const buttonStyleToUse = withBackground
    ? buttonStyle
    : buttonStylewithBackground;

  return (
    <>
      <button style={buttonStyleToUse} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default CustomButton;
