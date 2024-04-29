import { Link } from "react-router-dom";
import s1 from "../Images/media1.jpg";
import Footer from "../UI/Footer";
import ch1 from "../Images/csr/2022 CHILDREN'S DAY CELEBRATION 2.jpg";
import ch2 from "../Images/csr/2022 CHILDREN'S DAY CELEBRATION 3.jpg";
import ch3 from "../Images/csr/2022 CHILDREN'S DAY CELEBRATION 4.jpg";
import ch4 from "../Images/csr/2022 CHILDREN'S DAY CELEBRATION 5.jpg";
import ch5 from "../Images/csr/2022 CHILDREN'S DAY CELEBRATION 6.jpg";
import ch6 from "../Images/csr/2022 CHILDREN'S DAY CELEBRATION 7.jpg";
import chr1 from "../Images/csr/2022 CHRISTMAS CELEBRATION 1.jpg";
import chr2 from "../Images/csr/2022 CHRISTMAS CELEBRATION 2.jpg";
import chr3 from "../Images/csr/2022 CHRISTMAS CELEBRATION 3.jpg";
import chr4 from "../Images/csr/2022 CHRISTMAS CELEBRATION 4.jpg";
import chr5 from "../Images/csr/2022 CHRISTMAS CELEBRATION 5.jpg";
import chr6 from "../Images/csr/2022 CHRISTMAS CELEBRATION 6.jpg";
import chr7 from "../Images/csr/2022 CHRISTMAS CELEBRATION 7.jpg";
import xm1 from "../Images/csr/2023 CHILDRENS DAY CELEBRATION 1.jpg";
import xm2 from "../Images/csr/2023 CHILDRENS DAY CELEBRATION 2.jpg";
import xm3 from "../Images/csr/2023 CHILDRENS DAY CELEBRATION 3.jpg";
import xm4 from "../Images/csr/2023 CHILDRENS DAY CELEBRATION 4.jpg";
import xm5 from "../Images/csr/2023 CHILDRENS DAY CELEBRATION 5.jpg";
import xm6 from "../Images/csr/2023 CHILDRENS DAY CELEBRATION 6.jpg";
import xm7 from "../Images/csr/2023 CHILDRENS DAY CELEBRATION 7.jpg";
import bts1 from "../Images/csr/bts1.jpg";
import bts2 from "../Images/csr/bts2.jpg";
import bts3 from "../Images/csr/bts2.jpg";
import bts4 from "../Images/csr/bts4.jpg";
import bts5 from "../Images/csr/bts5.jpg";
import bts6 from "../Images/csr/bts6.jpg";
import xms1 from "../Images/csr/CHRISTMAS 2023 2.jpg";
import xms2 from "../Images/csr/CHRISTMAS 2023 3.jpg";
import xms3 from "../Images/csr/CHRISTMAS 2023 4.jpg";
import xms4 from "../Images/csr/CHRISTMAS 2023 5.jpg";
import xms5 from "../Images/csr/CHRISTMAS 2023 6.jpg";
import xms6 from "../Images/csr/CHRISTMAS 2023 7.jpg";
import xms7 from "../Images/csr/CHRISTMAS 2023 8.jpg";
import bck1 from "../Images/csr/bck1.jpg";
import bck2 from "../Images/csr/bck2.jpg";
import bck3 from "../Images/csr/bck3.jpg";
import bck4 from "../Images/csr/bck4.jpg";

import { Carousel } from "react-responsive-carousel";
function Csr() {
  return (
    <>
      <div className="hero-position">
        <img src={s1} alt="Hero-img" className="hero-img csr-img" />
        <div className="hero cor">
          <h2 className="hero-h2 cor-head">Corporate Social Responsibility</h2>
        </div>
      </div>
      <div className="container">
        <div className="csr">
          <p className="text-description">
            Since our establishment, our committment to Corporate Social
            Responsibility (CSR) has been unwavering. Teaming up with Golden
            Little Lights organization (a non governmental organization), we
            channel a significant portion of our revenue into impactful
            initiatives. Notable projects include the annual Children's Day and
            Christmas Parties, the Back to School Initiative, and the Prison
            Reform. In the span of 12 years, our CSR efforts have provided over
            8,000 meals to families in low income earning communities,
            distributed back to school backpacks, containing writing materials
            to over 3,000 kids, and secured legal representation for five
            individuals wrongly incarcerated, leading to their acquittal. These
            initiatives reflect our dedication to education, justice, and
            community welfare, making a tangible and positive impact on the
            lives of those we aim to serve.
          </p>

          <div className="grid-flex">
            <div class="img-slider fade">
              <div className="panelist">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={4000}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  stopOnHover={false}
                  showIndicators={false}
                  transitionTime={"0.4s"}
                  className="carousel">
                  <img src={ch1} alt="" className="img-pan" />
                  <img src={ch2} alt="" className="img-pan" />
                  <img src={ch3} alt="" className="img-pan" />
                  <img src={ch4} alt="" className="img-pan" />
                  <img src={ch5} alt="" className="img-pan" />
                  <img src={ch6} alt="" className="img-pan" />
                </Carousel>
              </div>
              <p className="text-description panels">2022 CHILDREN'S DAY</p>
            </div>
            <div class="img-slider fade">
              <div className="panelist">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={4000}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  stopOnHover={false}
                  showIndicators={false}
                  transitionTime={"0.4s"}
                  className="carousel">
                  <img src={chr1} alt="" className="img-pan" />
                  <img src={chr2} alt="" className="img-pan" />
                  <img src={chr3} alt="" className="img-pan" />
                  <img src={chr4} alt="" className="img-pan" />
                  <img src={chr5} alt="" className="img-pan" />
                  <img src={chr6} alt="" className="img-pan" />
                  <img src={chr7} alt="" className="img-pan" />
                </Carousel>
              </div>
              <p className="text-description panels">2022 CHRISTMAS</p>
            </div>

            <div class="img-slider fade">
              <div className="panelist">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={4000}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  stopOnHover={false}
                  showIndicators={false}
                  transitionTime={"0.4s"}
                  className="carousel">
                  <img src={xm1} alt="" className="img-pan" />
                  <img src={xm2} alt="" className="img-pan" />
                  <img src={xm3} alt="" className="img-pan" />
                  <img src={xm4} alt="" className="img-pan" />
                  <img src={xm5} alt="" className="img-pan" />
                  <img src={xm6} alt="" className="img-pan" />
                  <img src={xm7} alt="" className="img-pan" />
                </Carousel>
              </div>
              <p className="text-description panels">2023 CHILDREN'S DAY</p>
            </div>
          </div>
          {/* //////// */}
          <div className="grid-flex">
            <div class="img-slider fade">
              <div className="panelist">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={4000}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  stopOnHover={false}
                  showIndicators={false}
                  transitionTime={"0.4s"}
                  className="carousel">
                  <img src={bts1} alt="" className="img-pan" />
                  <img src={bts2} alt="" className="img-pan" />
                  <img src={bts3} alt="" className="img-pan" />
                  <img src={bts4} alt="" className="img-pan" />
                  <img src={bts5} alt="" className="img-pan" />
                  <img src={bts6} alt="" className="img-pan" />
                </Carousel>
              </div>
              <p className="text-description panels">BACKPACK SHARING</p>
            </div>
            <div class="img-slider fade">
              <div className="panelist">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={4000}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  stopOnHover={false}
                  showIndicators={false}
                  transitionTime={"0.4s"}
                  className="carousel">
                  <img src={xms1} alt="" className="img-pan" />
                  <img src={xms2} alt="" className="img-pan" />
                  <img src={xms3} alt="" className="img-pan" />
                  <img src={xms4} alt="" className="img-pan" />
                  <img src={xms5} alt="" className="img-pan" />
                  <img src={xms6} alt="" className="img-pan" />
                  <img src={xms7} alt="" className="img-pan" />
                </Carousel>
              </div>
              <p className="text-description panels">2023 CHRISTMAS</p>
            </div>

            <div class="img-slider fade">
              <div className="panelist">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={4000}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  stopOnHover={false}
                  showIndicators={false}
                  transitionTime={"0.4s"}
                  className="carousel">
                  <img src={bck1} alt="" className="img-pan" />
                  <img src={bck2} alt="" className="img-pan" />
                  <img src={bck3} alt="" className="img-pan" />
                  <img src={bck4} alt="" className="img-pan" />
                </Carousel>
              </div>
              <p className="text-description panels">BACKPACK SHARING 2</p>
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

export default Csr;
