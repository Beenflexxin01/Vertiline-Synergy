import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function HelloContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // e.target.reset();

    emailjs
      // .sendForm("service_78ldqg9", "template_391051r", e.target, {
      //   publicKey: "9XKpO2n6nmpx2DyV8",
      // })
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result.text);
        },
        (error) => {
          console.log("FAILED...", error.message);
        }
      );
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
