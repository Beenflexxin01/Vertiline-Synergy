import b1 from "../../Images/b1.png";
import b2 from "../../Images/b2.png";
import b3 from "../../Images/b3.png";
import b4 from "../../Images/b4.png";

function Business() {
  return (
    <>
      <div className="container">
        <h2 className="secondary-header bus-head">Business Focus</h2>
        <div className="grid-2">
          <div className="grid-2-cols">
            <div>
              <img src={b1} alt="" className="bus-img" />
              <h4 className="text-description ">Accomodation And Lodging</h4>
              <div className="flex bus-fl">
                <button className="bus-btn">Boutique Hotels</button>
                <button className="bus-btn">Resorts</button>
                <button className="bus-btn">Bed & Breakfast</button>
                <button className="bus-btn">Apartment Hotels</button>
                <button className="bus-btn">Motels</button>
                <button className="bus-btn">Hotels</button>
                <button className="bus-btn">Guest House</button>
              </div>
            </div>
          </div>

          <div className="grid-2-cols">
            <div>
              <img src={b2} alt="" className="bus-img" />
              <h4 className="text-description ">Food & Beverages</h4>
              <div className="flex bus-fl">
                <button className="bus-btn">Criteria</button>
                <button className="bus-btn">Bristo</button>
                <button className="bus-btn">Virtual Restaurants</button>
                <button className="bus-btn">Bars / Lounges</button>
                <button className="bus-btn">Fast Food Restaurants</button>
                <button className="bus-btn">
                  Causual & Fine Dinning Restaurants
                </button>
              </div>
            </div>
          </div>

          <div className="grid-2-cols">
            <div>
              <img src={b3} alt="" className="bus-img" />
              <h4 className="text-description ">Travel & Tourism</h4>
              <div className="flex bus-fl">
                <button className="bus-btn">
                  Travel & Tour Package Companies
                </button>
                <button className="bus-btn">Aviation</button>
                <button className="bus-btn">Transportation</button>
                <button className="bus-btn">Logistics</button>
              </div>
            </div>
          </div>

          <div className="grid-2-cols">
            <div>
              <img src={b4} alt="" className="bus-img" />
              <h4 className="text-description ">Accomodation And Lodging</h4>
              <div className="flex bus-fl">
                <button className="bus-btn">Casinos</button>
                <button className="bus-btn">Night Clubs</button>
                <button className="bus-btn">Parks and Gardens</button>
                <button className="bus-btn">Spas</button>
                <button className="bus-btn">Theme Parks</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
