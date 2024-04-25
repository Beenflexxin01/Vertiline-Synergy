import Footer from "../../UI/Footer";
import s1 from "../../Images/summit.jpg";

function Gallery() {
  return (
    <>
      <div className="hero-position  ">
        <img src={s1} alt="Hero-img" className="hero-img csr-img" />
        <div className="hero inv">
          <h2 className="hero-h2  ">HOSPITALITY SUMMIT</h2>
        </div>
      </div>
      <div className="container">
        <div className="csr">
          <h2 className="secondary-header">
            {" "}
            Hospitality Business Summit (2023)
          </h2>
          <p className="text-description">
            Vertiline Synergy Limited made history with the innaugural
            Hospitality Business Summit in 2023, a two day event that stood out
            as a highlight in the hospitality industry's calendar. Under the
            theme "Making Hospitality Great Again". The summit provided a
            platform for diverse industry professionals, business leaders, and
            investors to converge, fostering insightful discussions and
            collaborations to shape the future of the sector.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery;
