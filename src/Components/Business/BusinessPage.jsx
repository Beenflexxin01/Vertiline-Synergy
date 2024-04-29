import { useEffect } from "react";
import { useState } from "react";
import BusinessData from "./BusinessData";

function BusinessPage() {
  const [businessFocus, setBusinessFocus] = useState([]);

  useEffect(function () {
    async function getBusinessFocus() {
      try {
        const res = await fetch("http://localhost:3000/api/businessFocus");
        if (!res.ok) {
          throw new Error("Something went wrong while loading datas!");
        }

        const data = await res.json();

        if (data.response === "False") {
          throw new Error(
            "Unable to load data! Kindly check your internet connection!"
          );
        }

        setBusinessFocus(data);
      } catch (err) {
        console.log(err.message);
      }
    }

    getBusinessFocus();
  }, []);
  return (
    <div className="container">
      <h2 className="secondary-header bus-head">Business Focus</h2>
      <div className="grid-2 bus-grid">
        {businessFocus &&
          businessFocus.map((business) => (
            <BusinessData business={business} key={business._id} />
          ))}
      </div>
    </div>
  );
}

export default BusinessPage;
