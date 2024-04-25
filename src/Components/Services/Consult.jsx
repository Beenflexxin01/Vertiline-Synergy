import Footer from "../../UI/Footer";
import inv2 from "../../Images/co2.jpg";
function Consult() {
  return (
    <>
      <div className="hero-position">
        <img src={inv2} alt="Hero-img" className="hero-img csr-img co" />
        <div className="hero inv">
          <h2 className="hero-h2">HOSPITALITY CONSULTING</h2>
        </div>
      </div>

      <div className="container csr">
        <div className="grid-2-cols ">
          <h3 className="tertiary-header i-h">Hospitality Fraud Detection</h3>
          <p className="text-description">
            Our customized internal and external fraud analysis assists clients
            in detecting and preventing fraudulent activities amongst staff and
            vendors. Our hospitality auditors will identify past and ongoing
            fraud in your organization, and proffer long lasting solutions
          </p>
          <h4 className="cons-header i-h">Our Services Include:</h4>

          <div className="list grid-2 ">
            <li className="values turn-li">Inventory Analysis</li>
            <li className="values turn-li">Operations Audit</li>
            <li className="values turn-li">Financial Audit</li>
            <li className="values turn-li">Fraud and Pilferage Detection</li>
            <li className="values turn-li">Waste Control</li>
          </div>
        </div>

        <div className="grid-2-cols">
          <h3 className="tertiary-header i-h c-t ">
            Turnaround Management Services
          </h3>
          <p className="text-description">
            We are the best in revitalizing, reshaping and restructuring
            struggling businesses. We revive businesses experiencing failures or
            decline by reviewing, analyzing and examining current strategies in
            order to discover areas that need attention and improvement. We
            create restructuring plans, and guide rebranding efforts, that
            optimize operations.
          </p>

          <h4 className="cons-header i-h">Our Offering:</h4>
          <div className="list grid-2">
            <li className="values turn-li">Conept Assessment</li>
            <li className="values turn-li">Restructuring Strategies</li>
            <li className="values turn-li">Interim Coporate Management</li>
            <li className="values turn-li">Operations Assessment</li>
            <li className="values turn-li">Financial Analysis</li>
            <li className="values turn-li">Management Assessment</li>
            <li className="values turn-li">Training and Development</li>
            <li className="values turn-li">Business Specific Solutions</li>
            <li className="values turn-li">Business Rebranding</li>
          </div>
        </div>

        <div className="grid-2-cols ">
          <div className="flex">
            <h3 className="tertiary-header i-h">Pre Setup Consulting</h3>
          </div>
          <p className="text-description">
            We provide professional pre and post opening advisory and consulting
            services to clients interested in setting up any business in the
            hospitality industry. During the formative stage of their
            hospitality business venture, we assist our clients with idea
            conceptualization, planning, financial analysis and guidance that
            guarantees the success of their ventures . Our clients are
            individuals/groups interested in setting up hotels, restaurants and
            any hospitality related business home and abroad.
          </p>

          <h4 className="cons-header i-h">Our Offerings:</h4>
          <div className="list grid-2">
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

        <div className="grid-2-cols">
          <h3 className="tertiary-header i-h c-t ">Hospitality Franchising</h3>
          <p className="text-description">
            We recognize that successful franchising requires a harmonious
            partnership between franchisors and investors. We serve both
            businesses aspiring to franchise thier successful models and
            investors seeking lucrative franchise opportunities. Our
            comprehensive approach bridges the gap between these two essential
            components, ensuring a seamless and profitable franchising journey
            for all parties involved.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Consult;
