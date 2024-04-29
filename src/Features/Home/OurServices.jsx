import { useNavigate } from "react-router-dom";
// import consulting from "../../Images/consulting.jpg";
// import sol from "../../Images/sol.jpg";
// import investment from "../../Images/investment.jpg";
// import solution from "../../Images/solution.jpg";
function OurServices() {
  const navigate = useNavigate();
  return (
    <>
      <div className="serv-bg">
        <div className="container">
          <h2 className="secondary-header services serv-align">Our Services</h2>
          <div className="grid-3 serv-bg">
            <div className="serv-grid">
              <h3 className="tertiary-header services">
                HOSPITALITY INVESTMENT
              </h3>
              <p className="text-description">
                We identify potential investment prospects in the industry,
                which may include investing a new enterprise or forming
                strategic partnerships with entities within or beyond the
                hospitality sector.
              </p>
              <button
                className="btn serv-btn serv--btn"
                onClick={() => navigate("/service/hospitality-investment")}>
                Learn More
              </button>
            </div>

            <div className="serv-grid">
              <h3 className="tertiary-header services">
                HOSPITALITY SOLUTIONS
              </h3>
              <p className="text-description">
                We are focused on enhancing operational efficiency, guest
                experiences, and overall business performance thrugh the
                strategic integration of tradition, technology, tools, and
                expertise
              </p>
              <button
                className="btn serv-btn srv-b"
                onClick={() => navigate("/service/hospitality-solutions")}>
                Learn More
              </button>
            </div>

            <div className="serv-grid">
              <h3 className="tertiary-header services">CONSULTING</h3>
              <p className="text-description">
                Pre-setup, we assist clients with idea conceptualization,
                metriculous market analysis, and planning support to mitigate
                risks. For struggling ventures, our turnaround consulting
                service diagnose issues, create restructuring plans, and guide
                rebranding efforts, optimize operations; improving financial
                performances.
              </p>
              <button className="btn" onClick={() => navigate("/service/hospitality-consulting")}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
