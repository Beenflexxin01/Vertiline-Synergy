import Footer from "../../UI/Footer";
import { AiOutlineSolution } from "react-icons/ai";
import inv2 from "../../Images/inv-2.jpg";
function Consult() {
  return (
    <>
      <div className="hero-position">
        <img src={inv2} alt="Hero-img" className="hero-img c-i" />
        <div className="hero">
          <h2 className="hero-h2">HOSPITALITY CONSULTING</h2>
        </div>
      </div>

      <div className="grid-2 inv history">
        <div className="grid-2-cols ">
          <div className="flex">
            <h3 className="tertiary-header i-h">Hospitality Fraud Detection</h3>
            <AiOutlineSolution size={"40px"} className="contact-icon" />
          </div>
          <p className="text-description">
            We provide fraud detection services that assist business owners in
            preventing fraudulent activities amongst staff and vendors in order
            to maximize profit. Our professionals will identify past and ongoing
            fraud and proffer long lasting solutions through our customized
            internal and external fraud analysis.
          </p>
        </div>

        <div className="grid-2-cols list-grid">
          <div className="flex iv">
            <h3 className="tertiary-header i-h">Our Services Include:</h3>
          </div>
          <div className="list">
            <li className="values turn-li">Inventory Analysis</li>
            <li className="values turn-li">Operations Audit</li>
            <li className="values turn-li">Financial Audit</li>
            <li className="values turn-li">Fraud and Pilferage Detection</li>
            <li className="values turn-li">Waste Control</li>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid-2 ">
          <div className="grid-2-cols">
            <div className="flex">
              <h3 className="tertiary-header i-h c-t ">
                Turnaround Management Services
              </h3>
              <AiOutlineSolution size={"40px"} className="contact-icon c-t" />
            </div>
            <p className="text-description">
              With our professional strategies and techniques, we are the best
              in revitalizing and reshaping struggling businesses. We help
              businesses experiencing failures or decline by reviewing,
              analyzing and examining current strategies in order to discover
              areas that need attention and improvement. We create restructuring
              plans, and guide rebranding efforts, that optimize operations.
            </p>
          </div>

          <div className="grid-2-cols">
            <div className="flex iv">
              <h3 className="tertiary-header i-h c-t">Our Services Include:</h3>
            </div>
            <div className="grid-2">
              <div className="grid-2-cols l-g">
                <div className="list">
                  <li className="values turn-li">Conept Assessment</li>
                  <li className="values turn-li">Fraud Detection</li>
                  <li className="values turn-li">
                    Management Accountantability
                  </li>
                  <li className="values turn-li">Restructuring Strategies</li>
                  <li className="values turn-li">
                    Revisions and Restatement of SOP's
                  </li>
                  <li className="values turn-li">Employee Recruitment</li>
                  <li className="values turn-li">
                    Interim Corporate Management
                  </li>
                  <li className="values turn-li">Operations Assessment</li>
                </div>
              </div>

              <div className="grid-2-cols l-g">
                <div className="list">
                  <li className="values turn-li">Financial Analysis</li>
                  <li className="values turn-li">Cost Control System</li>
                  <li className="values turn-li">Management Assessment</li>
                  <li className="values turn-li">Training and Development</li>
                  <li className="values turn-li">
                    Business Specific Solutions
                  </li>
                  <li className="values turn-li">Business Rebranding</li>
                  <li className="values turn-li">Employee Background Check</li>
                  <li className="values turn-li">
                    Implementation of All Recommendations
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2 inv history">
        <div className="grid-2-cols ">
          <div className="flex">
            <h3 className="tertiary-header i-h">Pre Setup Consulting</h3>
            <AiOutlineSolution size={"40px"} className="contact-icon" />
          </div>
          <p className="text-description">
            Setting up a business locally or internationally is a huge stepfor
            every entrepreneur and it can also be confusing. Our consulting and
            advisory service assists entrepreneurs with idea conceptualization,
            planning, and market analysis, during the formative stage of their
            hospitality business venture. We provide professional pre and post
            set-up advisory and consulting services to individuals or groups
            interested in investing in the hospitality industry. We work
            together with clients interested in setting up hotels, restaurants
            and all hospitality and services related businesses home and abroad.
          </p>
        </div>

        <div className="grid-2-cols list-grid">
          <div className="flex iv">
            <h3 className="tertiary-header i-h">Our Services Include:</h3>
          </div>
          <div className="list">
            <li className="values turn-li">Concept Development</li>
            <li className="values turn-li ">Financial Advisory</li>
            <li className="values turn-li ">
              Construction and Space Management
            </li>
            <li className="values turn-li ">Business Operations Management</li>
            <li className="values turn-li ">Marketing Strategy</li>
            <li className="values turn-li ">Project Management</li>
            <li className="values turn-li ">Location Analysis</li>
            <li className="values turn-li ">Interim Corporate Management</li>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex">
          <h3 className="tertiary-header i-h c-t ">Hospitality Franchising</h3>
          <AiOutlineSolution size={"40px"} className="contact-icon c-t" />
        </div>
        <p className="text-description">
          We recognize that successful franchising requires a harmonious
          partnership between franchisors and investors. We serve both
          businesses aspiring to franchise thier successful models and investors
          seeking lucrative franchise opportunities. Our comprehensive approach
          bridges the gap between these two essential components, ensuring a
          seamless and profitable franchising journey for all parties involved.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Consult;
