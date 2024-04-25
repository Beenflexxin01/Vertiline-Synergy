import p1 from "../../Images/p1.jpg";

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
    </>
  );
}

export default Hero;
