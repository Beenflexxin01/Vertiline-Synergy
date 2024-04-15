import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../Images/VSL.png";
function Footer() {
  return (
    <>
      <div className="subscribe">
        <div className="container">
          <h2 className="secondary-header services serv-align sub">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <p className="hello-text">
            Sign up and receive all news, updates, special offers, and other
            discount informations.
          </p>

          <form action="" className="sub-form">
            <div className="sub-input">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                required
                className="input sub"
              />
              <button className="btn send-btn sub-btn">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="grid-4">
          <div className="grid-4-cols">
            <h4 className="nur-header">QUICK LINKS</h4>
            <nav className="footer-nav">
              <ul className="footer-ul">
                <li className="footer-li">
                  <NavLink className="nav-link footer-link">Home</NavLink>
                </li>

                <li className="footer-li">
                  <NavLink className="nav-link footer-link">About</NavLink>
                </li>

                <li className="footer-li">
                  <NavLink className="nav-link footer-link">Portfolio</NavLink>
                </li>

                <li className="footer-li">
                  <NavLink className="nav-link footer-link">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="grid-4-cols">
            <h4 className="nur-header">SERVICES</h4>
            <nav className="footer-nav">
              <ul className="footer-ul">
                <li className="footer-li">
                  <NavLink className="nav-link footer-link">
                    Hospitality Investment
                  </NavLink>
                </li>

                <li className="footer-li">
                  <NavLink className="nav-link footer-link">
                    Hospitality Solutions
                  </NavLink>
                </li>

                <li className="footer-li">
                  <NavLink className="nav-link footer-link">Consulting</NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="grid-4-cols">
            <h4 className="nur-header">POLICY</h4>
            <nav className="footer-nav">
              <ul className="footer-ul">
                <li className="footer-li">
                  <NavLink className="nav-link footer-link">
                    Privacy Policy
                  </NavLink>
                </li>

                <li className="footer-li">
                  <NavLink className="nav-link footer-link">
                    Terms & Conditions
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="grid-4-cols foot-4">
            <div className="social-icons">
              <FaInstagram size={"24px"} className="icons" />
              <FaFacebook size={"24px"} className="icons" />
              <FaTwitter size={"24px"} className="icons" />
            </div>
            <div className="footer-logo">
              <img src={logo} alt="Vertiline Synergy Limited" />
            </div>
          </div>
        </div>
        <div className="footer-border"></div>
        <p className="footer-text text-description">
          Copyright &copy; 2014 Vertiline Synergy Limited. | All Rights
          Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
