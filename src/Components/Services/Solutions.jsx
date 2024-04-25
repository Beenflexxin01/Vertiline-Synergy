import Footer from "../../UI/Footer";
import inv2 from "../../Images/so1.jpg";

function Solutions() {
  return (
    <>
      <div className="hero-position">
        <img src={inv2} alt="Hero-img" className="csr-img sol" />
        <div className="hero inv ">
          <h2 className="hero-h2">Hospitality Solutions</h2>
        </div>
      </div>
      <div className="container csr">
        <p className="text-description">
          Through strategic integration of traditional and technology, tools,
          expertise focus on enhancing operational efficiency, guest
          experiences, and overall business performance, we tackle clients’
          challenges and leverage opportunities by offering tailor-made
          technological solutions that optimize operations and elevate guest
          experiences. Our innovative solutions embrace sustainable practices
          and cultural relevance, positioning our clients as leaders in both
          guest satisfaction and environmental responsibility.
        </p>

        <div className="grid">
          <div className="grid-2-col ">
            <h3 className="tertiary-header i-h">
              Innovative and Practical Solutions
            </h3>
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

          <div className="grid-2-col ">
            <h3 className="tertiary-header i-h">Technological Solutions</h3>
            <p className="text-description">
              We provide modern technology driven solutions to various
              challenges faced by businesses within the hospitality industry. We
              also provide solutions that leverage cutting-edge technology to
              streamline hospitality operations, enhance guest experiences, and
              optimize revenue generation.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Solutions;
