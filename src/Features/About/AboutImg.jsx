import illustration from "../../Images/h1.jpg";

function AboutImg() {
  return (
    <>
      <div className="hero-position">
        <img src={illustration} alt="" className="about-img" />

        <div className="hero abt">
          {/* <h1 className="hero-h2 cor-head">About Us</h1> */}
        </div>
      </div>
    </>
  );
}

export default AboutImg;
