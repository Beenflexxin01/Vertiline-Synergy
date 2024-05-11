import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import p1 from "../../Images/p1.jpg";
import p1 from "../../Images/p4.jpg";
import p3 from "../../Images/P3.jpg";

function Hero() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={4000} // Set the auto-slide interval in milliseconds (e.g., 5 seconds)
        showThumbs={false} // Hide thumbnail navigation
        showStatus={true} // Hide status indicator
        showArrows={false} // Hide next and previous buttons
        stopOnHover={false} // Do not pause on hover
        showIndicators={false}
        transitionTime={"0.4s"}
        className="carousel">
        <div className="carousel-slide">
          <img src={p3} alt="" className="hero-img" />
          <div className="hero">
            <h2 className="hero-h2">
              Your One-Stop Hospitality <br /> Solutions Company.
            </h2>

            <p className="hero-p">Making Hospitality Great Again!</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={p1} alt="" className="hero-img" />
          <div className="hero">
            <h2 className="hero-h2">
              Your One-Stop Hospitality <br /> Solutions Company.
            </h2>

            <p className="hero-p">Making Hospitality Great Again!</p>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default Hero;
