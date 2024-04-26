import BusinessPage from "../Components/Business/BusinessPage";
import Awards from "../Features/Home/Awards";
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
      <BusinessPage />
      <OurServices />
      <Awards />
      <HelloContact />
      <Footer />
    </div>
  );
}

export default Home;
