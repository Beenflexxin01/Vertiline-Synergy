import { AiOutlineFund } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
// import inv1 from "../../Images/inv-1.jpg";
import { IoBusinessOutline } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import inv2 from "../../Images/inv-2.jpg";
import Footer from "../../UI/Footer";
function Investment() {
  return (
    <>
      <div className="grid-2">
        <div className="hero-position">
          <img src={inv2} alt="Hero-img" className="hero-img" />
        </div>

        <div className="investment">
          <div className="container">
            <div className="flex">
              <h3 className="tertiary-header ">Hospitality Investment Fund</h3>
              <AiOutlineFund size={"40px"} className="contact-icon i-v" />
            </div>
            <p className="text-description">
              Serving as Business Develppment Service Providers for the Bank of
              Industry (BOI), Nigeria's Largest Development Financing
              Institution, we assist investors in obtaining funding for both new
              and established businesses in the hospitality sector.{" "}
            </p>

            <p className="text-description">
              Having adequate working capital is also crucial to maintaining
              day-to-day operations such as inventory management and payroll. We
              identify and procide business development services, including
              funding for the establishment, expansion, diversification,
              rehabilitation and modernization of hospitality related
              businesses.
            </p>

            <p className="text-description">
              These funds are designed to assist businesses in realizing their
              growth, development, and expansion goals within the competitive
              hospitality sector. Funding capital will help startups cover
              essential expenses, such as, location setup, equipment purhcasing,
              marketing, and staffing.
            </p>
          </div>
        </div>
      </div>

      <div className="grid-2 history inv">
        <div className="grid-2-cols">
          <div className="flex iv">
            <h3 className="tertiary-header i-h">
              Hospitality Investment Management
            </h3>
            <GrUserManager size={"40px"} className="contact-icon" />
          </div>
          <p className="text-description">
            We use local and global expertise to help clients make informed
            investment decisions, maximizing returns and navigating
            complexities. Our focus is on identifying investment opportunities
            in the hospitality sector, whether through new ventures, business
            expansion, property acquisition, or strategic partnerships wihin or
            outside the industry. This could involve investing in a new venture,
            expanding an exisiting business, acquiring new properties, or
            strategically partnering with other players within or outside the
            hospitality sector. We also provide investment advisort, financial
            advisory, revenue assessment, cost analysis and also, we assist in
            the creation of robust financial projections, budget control
            strategies, and international business formation.
          </p>
        </div>

        <div className="grid-2-cols">
          <div className="flex">
            <h3 className="tertiary-header i-h">
              International Business Formation
            </h3>
            <IoBusinessOutline size={"40px"} className="contact-icon" />
          </div>
          <p className="text-description">
            We offer comprehensive support for launching new hospitality
            ventures, covering legal, regulatory, and operational aspects. Our
            experts serves as a guide in navigating international regulations
            and cultural nuances, ensuring a seamless expansion. With our
            in-depth market research and financial advisory, we would assist in
            identifying biable markets and securing the necessary funding and
            investment to fuel growth. We facilitate strategic partnerships and
            guide our clients through the complex process of establishing their
            presence internationally.
          </p>
        </div>

        <div className="grid-2-cols">
          <div className="flex">
            <h3 className="tertiary-header i-h">
              International and Local Expansion
            </h3>
            <GiCommercialAirplane size={"40px"} className="contact-icon" />
          </div>
          <p className="text-description">
            For hospitality businesses considering international expansion, we
            offer guidance on entering new markets, understanding local
            regulations and adapting to cultural nuances. We also support local
            businesses in setting up new ventures and expaning within their
            region.
          </p>
        </div>

        <div className="grid-2-cols">
          <div className="flex">
            <h3 className="tertiary-header i-h">
              Financial Advisory For Hospitality Businesses
            </h3>
            <IoBusinessOutline size={"40px"} className="contact-icon" />
          </div>
          <p className="text-description">
            We provide financial services specifically designed for businesses
            within the hospitality industry. Thiss includes in-depth analysis of
            revenue streams, cost structures, and budgeting to maximize
            profitability.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Investment;
