import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMapPin, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="grid-3">
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
            <div className="subscribe">
              <h4 className="nur-header sub">SUBSCRIBE TO OUR NEWSLETTER</h4>

              <p className="sub-text">
                Get the latest information from Vertiline Synergy Limited. Be
                amongst the first to know and stay updated on the go. Join our
                mailing list now.
              </p>

              <form action="" className="sub-form">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="input sub-input-form"
                />
                <button className="btn sub-btn">Subscribe</button>
              </form>
            </div>
            {/* 
            <div className="footer-logo">
              <img src={logo} alt="Vertiline Synergy Limited" />
            </div> */}
          </div>
        </div>
        <div className="footer-border"></div>
        <div className="contact-details">
          <div className="grid-2-cols">
            <div className=" footer-location  tel">
              <HiOutlineDevicePhoneMobile
                size={"24px"}
                className="footer-icon"
              />
              <Link
                to="tel: +234 7053310977"
                className="contact-link footer--link">
                +234 705 331 0977
              </Link>
            </div>

            <div className=" footer-location  tel">
              <MdEmail size={"24px"} className="footer-icon" />
              <Link
                to="mailto:info@vertilinesynergy.com "
                className="contact-link footer--link">
                info@vertilinesynergy.com
              </Link>
            </div>
          </div>

          <div className="grid-2-cols">
            <div className="social-icons">
              <FaInstagram size={"24px"} className="icons" />
              <FaFacebook size={"24px"} className="icons" />
              <FaTwitter size={"24px"} className="icons" />
            </div>
            <div className="footer-location tel">
              <HiMapPin size={"24px"} className="footer-icon" />
              <p className="text-description ">
                59, Awolowo Road, Ikoyi, Lagos Nigeria.
              </p>
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
