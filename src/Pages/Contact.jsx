import { Link } from "react-router-dom";
import { HiClock, HiMapPin, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import Footer from "../UI/Footer";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="grid-2">
          <div className="grid-2-cols contact-grid">
            <h2 className="secondary-header c-h">GET IN TOUCH</h2>
            <div className="tel">
              <HiOutlineDevicePhoneMobile
                size={"24px"}
                className="contact-icon"
              />
              <Link to="tel: +234 7053310977" className="contact-link">
                +234 705 331 0977
              </Link>
            </div>

            <div className="tel">
              <MdEmail size={"24px"} className="contact-icon" />
              <Link
                to="mailto:info@vertilinesynergy.com "
                className="contact-link">
                info@vertilinesynergy.com
              </Link>
            </div>

            <div className="">
              <div className="location tel">
                <HiMapPin size={"24px"} className="contact-icon" />
                <p className="text-description ">
                  59, Awolowo Road, Ikoyi, Lagos Nigeria.
                </p>
              </div>
            </div>

            <div className="">
              <div className="location tel">
                <HiClock size={"24px"} className="contact-icon" />
                <div className="block">
                  <p className="text-description ">
                    Monday - Friday (9:00 AM - 5:00 PM )
                  </p>
                  <p className="text-description ">
                    Saturday & Sunday (Closed)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-2-cols contact-grid">
            <h2 className="secondary-header c-h">SAY HELLO!</h2>
            <div className="fom">
              <form action="" className="contact-form">
                <ul className="form-ul">
                  <li className="form-li contact-li">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="input inp-2"
                    />
                  </li>

                  <li className="form-li contact-li">
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="input inp-2"
                    />
                  </li>

                  <li className="form-li contact-li">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      required
                      className="input inp-2"
                    />
                  </li>

                  <li className="form-li contact-li">
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      className="input inp-2"
                    />
                  </li>

                  <li className="form-li contact-li">
                    <textarea
                      name="Message"
                      placeholder="Your Message"
                      required
                      className="textarea ct"></textarea>
                  </li>
                </ul>
                <button className="btn contact-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
