import Header from "../../components/header/Header";
import "./Home.css";
import Body from "../../components/body/Body";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";
import { useRef } from "react";

const Home = () => {
  const contactUsSectionRef = useRef<HTMLElement | null>(null);
  // Function to scroll to the Contact Us section
  const scrollToContactUs = () => {
    if (contactUsSectionRef.current) {
      contactUsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const letsGoSectionRef = useRef<HTMLElement | null>(null);
  // Function to scroll to the Contact Us section
  const scrollToLetsGo = () => {
    if (letsGoSectionRef.current) {
      letsGoSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-contener-main">
      <header>
        <Header onClick={scrollToContactUs} onClickLetsgo={scrollToLetsGo} />
      </header>
      <body>
        <section ref={letsGoSectionRef} id="letsGoSection">
          <Body />
        </section>
        <section ref={contactUsSectionRef} id="ContactUsSection">
          <Contect />
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Home;
