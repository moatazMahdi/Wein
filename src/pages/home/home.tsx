import Header from "../../components/header/Header";
import "./Home.css";
import Body from "../../components/body/Body";
import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";
import { useRef } from "react";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
        <meta name="description" content="A brief description of your page." />
        <meta name="keywords" content="your, keywords, here" />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
        <meta name="og:title" content="Open Graph Title" />
        <meta name="og:description" content="Open Graph Description" />
        <meta name="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta name="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Twitter Card Title" />
        <meta name="twitter:description" content="Twitter Card Description" />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        />
        <link rel="canonical" href="https://yourwebsite.com/preferred-url" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="Your Website Title" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:site_name" content="Your Website Name" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:creator" content="@yourtwitterhandle" />
        <meta name="application-name" content="Your Application Name" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-tile-icon.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta
          name="google-site-verification"
          content="your-google-site-verification-code"
        />
        <link
          rel="preload"
          as="font"
          href="/your-font.woff"
          type="font/woff"
          crossOrigin="true"
        />
      </Helmet>

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
