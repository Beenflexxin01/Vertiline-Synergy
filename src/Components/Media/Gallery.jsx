import Footer from "../../UI/Footer";
import s1 from "../../Images/summit.jpg";
import pan4 from "../../Images/HBS Panelist 4.jpg";
import pan5 from "../../Images/HBS Panelist 5.jpg";
import pan6 from "../../Images/HBS Panelist 6.jpg";
import pan7 from "../../Images/HBS Panelist 7.jpg";
import pan8 from "../../Images/HBS Panelist 8.jpg";
import pan9 from "../../Images/HBS Panelist 9.jpg";
import pan10 from "../../Images/HBS Panelist 10.jpg";
import pan11 from "../../Images/HBS Panelist 11.jpg";
import pan12 from "../../Images/HBS Panelist 12.jpg";
import pan13 from "../../Images/HBS Panelist 13.jpg";
import pan14 from "../../Images/HBS Panelist 14.jpg";
import speak1 from "../../Images/HBS Speaker 1.jpg";
import speak2 from "../../Images/HBS Speaker 2.jpg";
import speak3 from "../../Images/HBS Speaker 3.jpg";
import speak4 from "../../Images/HBS Speaker 4.jpg";
import speak5 from "../../Images/HBS Speaker 5.jpg";
import speak6 from "../../Images/HBS Speaker 6.jpg";
import key1 from "../../Images/HBS Keynote Speaker 1.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
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
          <div className="grid-flex">
            <div class="img-slider fade">
              <div className="panelist">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={4000} // Set the auto-slide interval in milliseconds (e.g., 5 seconds)
                  showThumbs={false} // Hide thumbnail navigation
                  showStatus={false} // Hide status indicator
                  showArrows={false} // Hide next and previous buttons
                  stopOnHover={false} // Do not pause on hover
                  showIndicators={false}
                  transitionTime={"0.4s"}
                  className="carousel">
                  <img src={pan4} alt="" className="img-pan" />
                  <img src={pan5} alt="" className="img-pan" />
                  <img src={pan6} alt="" className="img-pan" />
                  <img src={pan7} alt="" className="img-pan" />
                  <img src={pan8} alt="" className="img-pan" />
                  <img src={pan9} alt="" className="img-pan" />
                  <img src={pan10} alt="" className="img-pan" />
                  <img src={pan11} alt="" className="img-pan" />
                  <img src={pan12} alt="" className="img-pan" />
                  <img src={pan13} alt="" className="img-pan" />
                  <img src={pan14} alt="" className="img-pan" />
                </Carousel>
              </div>
              <p className="text-description panels">PANELISTS</p>
            </div>
            <div class="img-slider fade">
              <div className="panelist">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={4000} // Set the auto-slide interval in milliseconds (e.g., 5 seconds)
                  showThumbs={false} // Hide thumbnail navigation
                  showStatus={false} // Hide status indicator
                  showArrows={false} // Hide next and previous buttons
                  stopOnHover={false} // Do not pause on hover
                  showIndicators={false}
                  transitionTime={"0.4s"}
                  className="carousel">
                  <img src={speak1} alt="" className="img-pan" />
                  <img src={speak2} alt="" className="img-pan" />
                  <img src={speak3} alt="" className="img-pan" />
                  <img src={speak4} alt="" className="img-pan" />
                  <img src={speak5} alt="" className="img-pan" />
                  <img src={speak6} alt="" className="img-pan" />
                </Carousel>
              </div>
              <p className="text-description panels">SPEAKERS</p>
            </div>
            <div class="">
              <div className="key">
                <img src={key1} alt="" className="img-pan" />
              </div>
              <p className="text-description panels kn">KEYNOTE SPEAKER</p>
            </div>
          </div>

          <div className="hbss">
            <p className="text-description">
              Click {""}
              <Link to={"https://hbs.vertilinesynergy.com"} target="blank">
                HERE
              </Link>
              {""} to learn more about the Hospitality Business Summit.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery;
