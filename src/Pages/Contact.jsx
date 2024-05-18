import { Link } from "react-router-dom";
import { HiClock, HiMapPin, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import Footer from "../UI/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result.text);
          toast.success("Your email has been successfully sent!");
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error(
            "An error occured while trying to send the email! Please, try again."
          );
        }
      );
    e.target.reset();
  };
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

            <div className="location tel">
              <HiClock size={"24px"} className="contact-icon" />
              <div className="block">
                <p className="text-description ">
                  Monday - Friday (9:00 AM - 5:00 PM )
                </p>
                <p className="text-description ">Saturday & Sunday (Closed)</p>
              </div>
            </div>
          </div>

          <div className="grid-2-cols contact-grid">
            <h2 className="secondary-header c-h">SAY HELLO!</h2>
            <div className="fom">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <ul className="form-ul">
                  <li className="form-li contact-li">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      required
                      className="input inp-2"
                    />
                  </li>

                  <li className="form-li contact-li">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      required
                      className="input inp-2"
                    />
                  </li>

                  <li className="form-li contact-li">
                    <input
                      type="number"
                      name="phone_number"
                      placeholder="Phone Number"
                      required
                      className="input inp-2"
                    />
                  </li>

                  <li className="form-li contact-li">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      className="textarea ct"></textarea>
                  </li>
                  <li className="form-li">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn contact-btn"
                    />
                  </li>
                </ul>
                {/* <button className="btn contact-btn">Submit</button> */}
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
