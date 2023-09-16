import Contect from "../../components/contacts/Contect";
import Footer from "../../components/footer/Footer";
import PagesHeader from "../../components/pagesHeader/PagesHeader";

const ContactUs = () => {
  return (
    <div>
      <PagesHeader
        title="Product Development"
        Descrpion="Supporting you on the path to digital transformation"
        sub_Descrpion="Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. Do you have an idea but are struggling to execute it because of the complexities involved? Don't worry. We are here to solve your problem. We help entrepreneurs convert their ideas into products and services. "
      />
      <Contect />
      <Footer />
    </div>
  );
};

export default ContactUs;
