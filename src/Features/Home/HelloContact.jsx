import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function HelloContact() {
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
      <div className="container">
        <h2 className="secondary-header services serv-align">Contact Us!</h2>
        {/* <p className="hello-text">
          Please fill the form below and our team will get back to you.
        </p> */}

        <div className="form">
          <form ref={form} onSubmit={sendEmail} className="form-class">
            <ul className="form-ul">
              <div className="form-block">
                <li className="form-li">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="user_name"
                    id="user_name"
                    required
                    className="input"
                  />
                </li>
                <li className="form-li">
                  <input
                    type="number"
                    id="phone_number"
                    name="phone_number"
                    placeholder="Phone"
                    required
                    className="input"
                  />
                </li>
              </div>

              <div className="form-block">
                <li className="form-li">
                  <input
                    type="Email"
                    name="user_email"
                    id="user_email"
                    placeholder="Email"
                    required
                    className="input"
                  />
                </li>
                <li className="form-li">
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="input"
                  />
                </li>
              </div>
              <li className="form-li">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                  className="textarea med-txt"></textarea>
              </li>
              <li className="form-li">
                <input type="submit" value="Send" className="btn send-btn" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}

export default HelloContact;
