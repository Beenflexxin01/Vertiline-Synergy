import p1 from "../../Images/p1.jpg";
import boi from "../../Images/boi.png";
import lcc from "../../Images/LCC.jpg";
function Hero() {
  return (
    <>
      <div className="hero-position">
        <img src={p1} alt="Hero-img" className="hero-img" />
        <div className="hero">
          <h2 className="hero-h2">
            Your One-Stop Hospitality <br /> Solutions Company.
          </h2>

          <p className="hero-p">Making Hospitality Great Again!</p>
        </div>
      </div>

      <div className="container">
        <h3 className="tertiary-header mem-head">Trusted By</h3>
        <div className="member">
          <div className="flex">
            <img src={boi} alt="Bank of Industry" className="mem-img" />
          </div>
          <div className="flex">
            <img src={lcc} alt="Bank of Industry" className="mem-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
