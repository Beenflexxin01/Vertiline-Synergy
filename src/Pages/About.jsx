import AboutImg from "../Features/About/AboutImg";
import History from "../Features/About/History";
import Mission from "../Features/About/Mission";
import Reason from "../Features/About/Reason";
import Values from "../Features/About/Values";
import Footer from "../UI/Footer";

function About() {
  return (
    <div>
      <AboutImg />
      <History />
      <Reason />
      <Mission />
      <Values />
      <Footer />
    </div>
  );
}

export default About;
