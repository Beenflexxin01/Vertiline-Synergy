import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../UI/Loader";
import { HiMapPin } from "react-icons/hi2";
import Footer from "../../UI/Footer";
import BackendLink from "../../utils/BackendLink";

import { FaInstagram } from "react-icons/fa";
function PortfolioContent() {
  const [portfolioContent, setPortfolioContent] = useState({});
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState();

  const {
    title,
    location,
    instagram,
    role,
    concept,
    concept1,
    concept2,
    concept3,
    structure,
    techAdv1,
    technicalAdvisory,
    techAdv2,
    techAdv3,
    techAdv4,
    techAdv5,
    // img3,
    // img,
    techAdv6,
    techAdv7,
    techAdv8,
    techAdv9,
    techAdv10,
    techAdv11,
    techAdv12,
    techAdv13,
    techAdv14,
    techAdv15,
    techAdv16,
    techAdv17,
    techAdv18,
  } = portfolioContent;
  useEffect(
    function () {
      try {
        async function getPortfolioContent() {
          const res = await fetch(`${BackendLink}/api/portfolios/${id}`);
          if (!res.ok)
            throw new Error("Something went wrong while trying to load data");

          const data = await res.json();

          if (data.Response === "False")
            throw new Error(
              "Unable to load data! Kindlt check your internet connection."
            );
          setPortfolioContent(data);
          setIsLoading(false);
        }
        getPortfolioContent();
      } catch (err) {
        console.log(err);
      }
    },
    [id]
  );
  return (
    <>
      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="imgg">
              {/* <img src={img} alt="" className="img" /> */}
            </div>
            <div className="container">
              <div className="portfolios">
                <h2 className="secondary-header blog-header">{title}</h2>
                <div className="flex port-flex">
                  <p className="location loc-fl">
                    <HiMapPin size={"15px"} className="footer-icon" />
                    {location}
                  </p>

                  <Link to={instagram} className="port-icon" target="blank">
                    <FaInstagram
                      size={"24px"}
                      className="port-icon footer-icon"
                    />
                  </Link>
                </div>

                <h3 className="tertiary-header">{concept}</h3>
                <p className="text-description concept">{concept1}</p>
                <p className="text-description concept">{concept2}</p>
                <p className="text-description concept">{concept3}</p>
                <h3 className="tertiary-header">{structure}</h3>
                <p className="text-description">{technicalAdvisory}</p>
                <h3 className="tertiary-header role">{role}</h3>
                <ul className="port-ul">
                  <li className="port--val">{techAdv1}</li>
                  <li className="port--val">{techAdv2}</li>
                  <li className="port--val">{techAdv3}</li>
                  <li className="port--val">{techAdv4}</li>
                  <li className="port--val">{techAdv5}</li>
                  <li className="port--val">{techAdv6}</li>

                  <li className="port-val vv">{techAdv7}</li>
                  <li className="port-val">{techAdv8}</li>
                  <li className="port-val">{techAdv9}</li>
                  <li className="port-val">{techAdv10}</li>
                  <li className="port-val">{techAdv11}</li>
                  <li className="port-val">{techAdv12}</li>
                  <li className="port-va">{techAdv13}</li>
                  <li className="port-va">{techAdv14}</li>
                  <li className="port-va">{techAdv15}</li>
                  <li className="port-va">{techAdv16}</li>
                  <li className="port-va">{techAdv17}</li>
                  <li className="port_va">{techAdv18}</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default PortfolioContent;
