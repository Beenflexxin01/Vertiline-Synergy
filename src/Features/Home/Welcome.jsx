import { useNavigate } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="welcome-cont">
          <h2 className="secondary-header weight">
            <span className="wel">Welcome to</span> <br />
            <span className="span"> Vertiline Synergy Limited</span>
          </h2>
          <div className="border"></div>
        </div>

        <div className="welcome-words">
          <p className="text-description">
            We are a modern hospitality company dedicated to providing financial
            success, driving positive transformation and growth to hotels,
            resorts, restaurants, and other hospitality related businesses. We
            are committed to fostering growth, innovation, and excellence. We
            specialize in providing a comprehensive range of services tailored
            to elevate African-owned and African-based businesses, enabling them
            to thrive, helping them achieve financial success, operational
            efficiency, and sustainable growth in a competitive industry.
          </p>
        </div>

        <p className="read" onClick={() => navigate("/about")}>
          Read More &rarr;
        </p>
      </div>
    </>
  );
}

export default Welcome;
