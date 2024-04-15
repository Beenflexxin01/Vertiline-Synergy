import Footer from "../../UI/Footer";
import { AiOutlineSolution } from "react-icons/ai";
import inv2 from "../../Images/sol.jpg";
import { GrTechnology } from "react-icons/gr";

function Solutions() {
  return (
    <>
      <div className="grid-2">
        <div className="hero-position">
          <img src={inv2} alt="Hero-img" className="hero-img" />
        </div>
        <div className="investment">
          <div className="container">
            <div className="flex">
              <h3 className="tertiary-header ">Hospitality Solutions</h3>
              <AiOutlineSolution size={"40px"} className="contact-icon i-v" />
            </div>
            <p className="text-description">
              This service focuses on enhancing operational efficiency, guest
              experiences, and overall business performance through strategic
              integration of tradition, technology, tools, and expertise. We
              tackle there challenges and leverage opportunities by offering
              tailor-made technological solutions that optimize operations and
              elevate guest experiences. Additionally, our innovative solutions
              embrace sustainable practices and cultural relevance, positioning
              our clients as leaders in both guest satisfaction and
              environmental responsibility.
            </p>
          </div>
        </div>
      </div>

      <div className="grid-2 history inv">
        <div className="grid-2-cols">
          <div className="flex">
            <h3 className="tertiary-header i-h">
              Innovative and Practical Solutions
            </h3>
            <AiOutlineSolution size={"40px"} className="contact-icon" />
          </div>
          <p className="text-description">
            Our innovative solutions encompasses both modern and traditional
            strategies to enhance various facets of the hospitality industry.
            These solutions focus on enhancing guest experiences, streamlining
            processes, driving business growth using no technological methods
            and strategies. We integrate traditional and innovative strategies
            to improve various aspects of the hospitality industry, from guest
            services to sustainability practices.
          </p>
        </div>

        <div className="grid-2-cols">
          <div className="flex iv">
            <h3 className="tertiary-header i-h">Technological Solutions</h3>
            <GrTechnology size={"40px"} className="contact-icon" />
          </div>
          <p className="text-description">
            We provide modern technology driven solutions to various challenges
            faced by businesses within the hospitality industry. We also provide
            solutions that leverage cutting-edge technology to streamline
            hospitality operations, enhance guest experiences, and optimize
            revenue generation.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Solutions;
