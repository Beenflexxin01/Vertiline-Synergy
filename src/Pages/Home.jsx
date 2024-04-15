import Awards from "../Features/Home/Awards";
import Business from "../Features/Home/Business";
import HelloContact from "../Features/Home/HelloContact";
import Hero from "../Features/Home/Hero";
import OurServices from "../Features/Home/OurServices";
import Welcome from "../Features/Home/Welcome";
import Footer from "../UI/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <Business />
      <OurServices />
      <Awards />
      <HelloContact />
      <Footer />
    </div>
  );
}

export default Home;
