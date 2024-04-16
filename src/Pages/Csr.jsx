import s1 from "../Images/s1.jpg";
import Footer from "../UI/Footer";

function Csr() {
  return (
    <>
      <div className="hero-position">
        <img src={s1} alt="Hero-img" className="hero-img csr-img" />
        <div className="hero csr">
          <h2 className="hero-h2">CSR</h2>
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
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Csr;
