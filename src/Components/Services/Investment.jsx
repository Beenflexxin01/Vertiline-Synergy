import inv2 from "../../Images/inv1.jpg";
import Footer from "../../UI/Footer";
function Investment() {
  return (
    <>
      <div className="hero-position">
        <img src={inv2} alt="Hero-img" className=" csr-img" />
        <div className="hero inv">
          <h2 className="hero-h2">Hospitality Investment</h2>
        </div>
      </div>

      <div className="container csr">
        <h3 className="tertiary-header i-h">Hospitality Investment Fund</h3>
        <p className="text-description ">
          As Business Development Service Providers for Nigeria's Largest
          Development Financing Institution-The Bank of Industry (BOI), we
          assist investors in obtaining funding for both new and established
          businesses in the hospitality sector. We identify businesses in need
          of funds for establishments, expansion, diversification,
          rehabilitation and modernization and provide funds and business
          development services to such business ventures. These funds are
          designed to assist businesses in realizing their growth, development,
          and expansion goals within the competitive hospitality sector. For
          startups, our capital funding helps startups cover essential expenses,
          such as, location setup, equipment purchasing, procurement, operations
          cost marketing cost and staffing.
        </p>

        <div className="inv-margin">
          <h3 className="tertiary-header i-h">
            Hospitality Investment Management
          </h3>
          <p className="text-description">
            We identify investment opportunities in the hospitality sector,
            whether through new ventures, business expansion, property
            acquisition, or strategic partnerships within or outside the
            industry. Through Our local and global expertise, we assist clients
            interested in investing in the hospitality industry make informed
            investment decisions, maximize returns and navigate complexities.
          </p>

          <h4 className="cons-header i-h i--h">Our offerings:</h4>
          <div className="list grid ">
            <li className="values turn-li">investment advisory</li>
            <li className="values turn-li">Financial Advisory</li>
            <li className="values turn-li">Revenue Assessment</li>
          </div>
        </div>

        <div className="inv-margin">
          <h3 className="tertiary-header i-h">
            International Business Formation and Local Expansion
          </h3>
          <p className="text-description">
            We guide our clients through the complex process of establishing
            their presence internationally, while also providing support to
            local businesses looking to set up new ventures or expand within
            their region. Ensuring a seamless expansion, we offer comprehensive
            support and facilitate strategic partnerships for launching new
            hospitality ventures internationally. Our experts serve as guides in
            navigating cultural nuances, understanding international and local
            regulations, covering legal, regulatory, and operational aspects.
            Through our in-depth market research and financial advisory, we
            assist clients in identifying viable markets, securing the necessary
            funding and investment to fuel growth their business ventures.
          </p>
        </div>
        {/* <div className="grid-2-cols sol-grid">
          <div className="flex">
            <h3 className="tertiary-header i-h">
              International and Local Expansion
            </h3>
          </div>
          <p className="text-description">
            For hospitality businesses considering international expansion, we
            offer guidance on entering new markets, understanding local
            regulations and adapting to cultural nuances. We also support local
            businesses in setting up new ventures and expaning within their
            region.
          </p>
        </div> */}
        <div className="inv-margin">
          <h3 className="tertiary-header i-h">
            Financial Advisory For Hospitality Businesses
          </h3>
          <p className="text-description">
            We provide financial services specifically designed for businesses
            within the hospitality industry. Thiss includes in-depth analysis of
            revenue streams, cost structures, and budgeting to maximize
            profitability.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Investment;
