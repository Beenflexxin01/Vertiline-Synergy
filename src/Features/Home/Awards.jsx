import award from "../../Images/award.png";

import boi from "../../Images/boi.png";
import lcc from "../../Images/LCC.jpg";
function Awards() {
  return (
    <>


<div className="container">
<h3 className="tertiary-header mem-head">Key Relationships</h3>
<div className="member">
  <div className="flex">
    <img src={boi} alt="Bank of Industry" className="mem-img" />
  </div>
  <div className="flex">
    <img src={lcc} alt="Bank of Industry" className="mem-img" />
  </div>
</div>
</div>
      
      
      <div className="award">
        <div className="container awards">
          <img src={award} alt="" className="award-img" />
        </div>
      </div>
  
    </>
  );
}

export default Awards;
