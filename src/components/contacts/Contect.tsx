import "./Contects.css";
import { useState } from "react";
import CustomButton from "../custombutton/customButton";
function Contect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log(formData);
  };
  return (
    <div className="contects-container">
      <div className="contects-container-section-right">
        <div>
          {/* <p className="contects-container-section-right-CONTACT">CONTACT</p> */}
          <p className="contects-container-section-right-CONTACT">CONTACT</p>
        </div>
        <h1>Let's get in touch</h1>
        <h3>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure
        </h3>
      </div>
      <div className="contects-container-section-lift">
        <form onSubmit={handleSubmit} className="underline-form">
          <div className="underline-input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              style={{
                backgroundColor: "transparent",
                borderBottom: "1px solid #ccc",
              }}
              id="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="underline-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              style={{
                backgroundColor: "transparent",
                borderBottom: "1px solid #ccc",
                borderBottomColor: "#fff",
              }}
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="underline-input">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              style={{
                backgroundColor: "transparent",
                borderBottom: "1px solid #ccc",
                maxHeight: 130,
              }}
              value={message}
              onChange={handleChange}
            />
          </div>
          <CustomButton
            text="Send"
            fontSize="28px"
            fontWeight="700"
            width="447px"
            height="66px"
            backgroundColor="#fff"
            color="#3F1BDD"
            onClick={() => {
              // Define your click event handler here
              alert("Senddddddddddd ");
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Contect;
