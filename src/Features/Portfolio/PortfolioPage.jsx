import { useEffect, useState } from "react";
import PortfolioData from "./PortfolioData";
import p1 from "../../Images/port3.jpg";
import BackendLink from "../../utils/BackendLink";

function PortfolioPage() {
  const [portfolioDetails, setPortfolioDetails] = useState([]);

  useEffect(function () {
    async function getPortfolioData() {
      try {
        const res = await fetch(`${BackendLink}/api/portfolios`);

        if (!res.ok)
          throw new Error("Something went wrong while trying to fecth data!");

        const data = await res.json();
        if (data.Response === "False")
          throw new Error(
            "Unable to load data! Kindly check your internet or your route."
          );
        setPortfolioDetails(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getPortfolioData();
  }, []);
  return (
    <>
      <div className="hero-position">
        <img src={p1} alt="Hero-img" className="port-img" />
        <div className="hero abt">
          <h2 className="hero-h2">PORTFOLIO</h2>
        </div>
      </div>
      <div className="container">
        <div className="grid-4">
          {portfolioDetails &&
            portfolioDetails.map((portfolio) => (
              <PortfolioData portfolio={portfolio} key={portfolio._id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
