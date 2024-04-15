function HelloContact() {
  return (
    <>
      <div className="container">
        <h2 className="secondary-header services serv-align">SAY HELLO!</h2>
        <p className="hello-text">
          Please fill the form below and our team will get back to you.
        </p>

        <div className="form">
          <form action="" className="form-class">
            <ul className="form-ul">
              <div className="form-block">
                <li className="form-li">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="input"
                  />
                </li>
                <li className="form-li">
                  <input
                    type="number"
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
                  name=""
                  id=""
                  placeholder="Message"
                  required
                  className="textarea"></textarea>
              </li>
            </ul>
            <button className="btn send-btn">Send &rarr;</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default HelloContact;
