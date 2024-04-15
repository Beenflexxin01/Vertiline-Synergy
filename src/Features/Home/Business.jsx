import { IoFastFoodOutline } from "react-icons/io5";
import table2 from "../../Images/table2.jpg";
// import table3 from "../../Images/table3.jpg";

import {
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineHomeModern,
} from "react-icons/hi2";

function Business() {
  return (
    <>
      <div className="business">
        <div className="containe">
          <div className="grid-2 business-grid-2">
            <div className="grid-2-cols business-grid-2-cols">
              <h1 className="business-header">BUSINESS FOCUS</h1>
              <p className="text-description business-text">
                At Vertiline Synergy Limited, we undertake a creative yet
                practical approach to hospitality consulting and marketing. We
                tailor our services to suit your business' immediate and future
                requirements. Whether you are opening, re-opening, or wanting to
                expand, our team of consultants can help your business standout
                with a distinctive concept and innovative marketing strategy.
              </p>

              <div className="focus-attr">
                <div className="focus">
                  <button className="nur-header focus-btn acc">
                    <HiOutlineHomeModern size={"40px"} className="icon" />
                    Accomodation <br /> & <br /> Lodging
                  </button>
                </div>
                <div className="focus">
                  <button className="nur-header focus-btn food">
                    <IoFastFoodOutline size={"40px"} className="icon" />
                    Food <br /> & <br /> Beverages
                  </button>
                </div>

                <div className="focus">
                  <button className="nur-header focus-btn travel">
                    <HiOutlineBriefcase size={"40px"} className="icon" />
                    Travel <br /> & <br /> Tours
                  </button>
                </div>

                <div className="focus">
                  <button className="nur-header focus-btn recreate">
                    <HiOutlineGlobeAlt size={"40px"} className="icon" />
                    Recreation
                  </button>
                </div>
              </div>
            </div>
            <div className="grid-2-cols grid-img">
              <img src={table2} alt="business-img" className="focus-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
