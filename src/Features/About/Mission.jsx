// import {
//   HiOutlineSparkles,
//   HiOutlineTrophy,
//   HiPuzzlePiece,
// } from "react-icons/hi2";

function Mission() {
  return (
    <>
      <div className="container">
        <div className="grid-3">
          <div className="grid-3-cols">
            <div className="statement">
              <h3 className="tertiary-header our">Our Mission</h3>
              {/* <HiPuzzlePiece size={"30px"} /> */}
            </div>
            <div className="mission-border"></div>
            <p className="text-description">
              To empower African owned and African based businesses in the
              hospitality sector with top success by offering investment
              strategies, innovative solutions and insightful consulting
              services.
            </p>
          </div>
          <div className="grid-3-cols">
            <div className="statement">
              <h3 className="tertiary-header our">Our Vision</h3>
              {/* <HiOutlineSparkles size={"30px"} /> */}
            </div>
            <div className="mission-border"></div>

            <p className="text-description">
              To be a globally recognized leader in driving sustainable growth
              and innovation in the hospitality industry through strategic
              investments, consulting excellence, and fostering impactful
              partnerships.
            </p>
          </div>
          <div className="grid-3-cols">
            <div className="statement">
              <h3 className="tertiary-header our">Our Goal</h3>
              {/* <HiOutlineTrophy size={"30px"} /> */}
            </div>
            <div className="mission-border"></div>

            <p className="text-description">
              To become the leading one stop hospitality and service solutions
              company in Africa.
            </p>
          </div>
        </div>

        <div className="management ">
          <h2 className="secondary-header"> Our Management </h2>
          <p className="text-description">
            The company management holds degrees and certifications in various
            management and hospitality fields, including: certified Hotel and
            Hospitality Professional, certified Travel and Tourism Management,
            certified Customer Relations Manager, certified Business Management,
            and certified Hospitality Risk Management in Management Information
            Systems. Additionally, we possess certifications in Project
            Management, Digital Marketing, and Hospitality Management how to
            analyze and maximize your restaurant's profitability, obtained from
            top schools. Collectively, we bring over 25 years of experience in
            hospitality and business management to our endeavors.
          </p>
        </div>
      </div>
    </>
  );
}

export default Mission;
