import { useNavigate } from "react-router-dom";

function PortfolioData({ portfolio }) {
  const navigate = useNavigate();

  const { _id: portfolioId, title, location, image } = portfolio;

  return (
    <>
      <div className="port">
        <div
          className="grid-3-cols port-grid"
          onClick={() => navigate(`/portfolio/details/${portfolioId}`)}>
          <div className="port--grid">
            {/* <h3 className="tertiary-header port-head">{title}</h3> */}
            <img src={image} alt={title} className="port-image" />
          </div>
          <div className="loc">
            <p className="location-desc">Location</p>
            <p className="location">{location}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioData;
