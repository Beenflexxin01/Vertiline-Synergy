import {
  HiOutlineSparkles,
  HiOutlineTrophy,
  HiPuzzlePiece,
} from "react-icons/hi2";

// import about1 from "../../Images/about 1.jpg";
// import about2 from "../../Images/about 2.jpg";
// import about4 from "../../Images/about4.jpg";
// import about5 from "../../Images/about 5.jpg";
// import about6 from "../../Images/about 6.jpg";
// import about7 from "../../Images/about 7.jpg";
import about8 from "../../Images/about 8.jpg";
// import about3 from "../../Images/about 3.jpg";

function AboutImg() {
  return (
    <>
      <div>
        <img src={about8} alt="" className="about-img" />

        <div className="hero about-hero">
          <h2 className="hero-h2">Our Corporate Values</h2>
          <div className="hero-li">
            <li className="certifications values">Result Oriented</li>
            <li className="certifications values">Innovation</li>
            <li className="certifications values">Integrity</li>
            <li className="certifications values">Hard Work</li>
            <li className="certifications values">Focus</li>
            <li className="certifications values">Dedication</li>
            <li className="certifications values">Diligence</li>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid-3">
          <div className="grid-3-cols">
            <div className="statement">
              <h3 className="tertiary-header our">Our Mission</h3>
              <HiPuzzlePiece size={"30px"} />
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
              <HiOutlineSparkles size={'30px'} />

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
              <HiOutlineTrophy size={"30px"} />
            </div>
            <div className="mission-border"></div>

            <p className="text-description">
              To become the leading one stop hospitality and service solutions
              company in Africa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutImg;
