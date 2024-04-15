import award from "../../Images/award.png";
// import boi from "../../Images/BOI.jpg";
// import lcc from "../../Images/LCC.jpg";
function Awards() {
  return (
    <>
      <div className="award">
        <div className="container awards">
          <img src={award} alt="" className="award-img" />
        </div>
      </div>
      {/* <div className="container">
        <div className="member">
          <div className="flex">
            <p className="text-description">
              Business Development Service Provider
            </p>
            <img src={boi} alt="Bank of Industry" className="mem-img" />
          </div>
          <div className="flex">
            <p className="text-description">Member</p>
            <img src={lcc} alt="Bank of Industry" className="mem-img" />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Awards;
