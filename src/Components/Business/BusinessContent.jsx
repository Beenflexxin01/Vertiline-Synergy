import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../UI/Loader";
import Footer from "../../UI/Footer";

function BusinessContent() {
  const [businessFocus, setBusinessFocus] = useState({});
  const [isLoading, setIsLoading] = useState();

  const { id } = useParams();

  const {
    title,

    description,
    hotel,
    turnAround,
    serv1,
    serv2,
    serv3,
    serv4,
    serv5,
    serv6,
    serv7,
    serv8,
    serv9,
    serv10,
    serv11,
    serv12,
    concept,
    conceptText,
    concept1,
    concept2,
    concept3,
    concept4,
    turnAroundText,
    turn1,
    turn2,
    turn3,
    turn4,
    turn5,
    turn6,
    res,
    fb1,
    fb2,
    fb3,
    fb4,
    fb5,
    fb6,
    fb7,
    fb8,
    fb9,
    fb10,
    fb11,
    fb12,
    fb13,
    fb14,
    fb15,
    fb16,
    fb17,
    fb18,
    fb19,
    restOperation,
    resConcept,
    op1,
    op2,
    resFraud,
    resFraudConcept,
    resServ1,
    resServ2,
    resServ3,
    resServ4,
    resServ5,
    resServ6,
    resServ7,
    resDesign,
    resDesignConcept,
    resDesignServ1,
    resDesignServ2,
    resDesignServ3,
    resDesignServ4,
    resDesignServ5,
    resDesignServ6,
    resDesignServ7,
    resDesignServ8,
    resDesignServ9,
    ourServ,
    advOp1,
    advOp2,
    advOp3,
    advOp4,
    finMngt,
    finMngt1,
    cons,
    adv1,
    adv2,
    adv3,
    adv4,
    adv5,
    tOperation,
    turnAroundFb,
    servInd,
    servDesc,
    ind1,
    ind2,
    ind3,
    ind4,
    ind5,
    ind6,
    ind7,
    ind8,
    ind9,
    ind10,
    ind11,
    ind12,
  } = businessFocus;

  useEffect(
    function () {
      async function getBusinessFocus() {
        try {
          const res = await fetch(
            `http://localhost:3000/api/businessFocus/${id}`
          );

          if (!res.ok)
            throw new Error("Something went wrong while loading data1");

          const data = await res.json();

          if (data.response === "False")
            throw new Error("Unable to load data! Kindly check your internet");

          setBusinessFocus(data);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      }
      getBusinessFocus();
    },
    [id]
  );
  return (
    <>
      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="container ">
              <div className="csr">
                <div className="foc">
                  <h2 className="secondary-header title">{title}</h2>
                  <p className="text-description">{description}</p>

                  <h4 className="text-description title">{hotel}</h4>
                  <ul className="port-ul">
                    <li className="bus-li">{serv1}</li>
                    <li className="bus-li">{serv2}</li>
                    <li className="bus-li">{serv3}</li>
                    <li className="bus-li">{serv4}</li>
                    <li className="bus-li">{serv5}</li>
                    <li className="bus-li">{serv6}</li>
                  </ul>

                  <h4 className="text-description title">{turnAround}</h4>
                  <ul className="port-ul">
                    <li className="bus-li">{serv7}</li>
                    <li className="bus-li">{serv8}</li>
                    <li className="bus-li">{serv9}</li>
                    <li className="bus-li">{serv10}</li>
                    <li className="bus-li">{serv11}</li>
                    <li className="bus-li">{serv12}</li>
                  </ul>

                  <h4 className="tertiary-header">{concept}</h4>
                  <p className="text-description">{conceptText}</p>
                  <p className="text-description">{ourServ}</p>
                  <ul className="port-ul">
                    <li className="concept-li">{concept1}</li>
                    <li className="concept-li">{concept2}</li>
                    <li className="concept-li">{concept3}</li>
                    <li className="concept-li">{concept4}</li>
                  </ul>

                  <h4 className="text-description title">{turnAroundFb}</h4>
                  <p className="text-description">{turnAroundText}</p>
                  <p className="text-description">{ourServ}</p>
                  <ul className="port-ul">
                    <li className="bus-li">{turn1}</li>
                    <li className="bus-li">{turn2}</li>
                    <li className="bus-li">{turn3}</li>
                    <li className="bus-li">{turn4}</li>
                    <li className="bus-li">{turn5}</li>
                    <li className="bus-li">{turn6}</li>
                  </ul>

                  <h4 className="tertiary-header">{restOperation}</h4>
                  <p className="text-description">{resConcept}</p>
                  <p className="text-description">{ourServ}</p>
                  <ul className="port-ul">
                    <li className="bus-li">{op1}</li>
                    <li className="bus-li">{op2}</li>
                  </ul>

                  <h4 className="tertiary-header">{resFraud}</h4>
                  <p className="text-description">{resFraudConcept}</p>
                  <p className="text-description">{ourServ}</p>
                  <ul className="port-ul">
                    <li className="bus-li">{resServ1}</li>
                    <li className="bus-li">{resServ2}</li>
                    <li className="bus-li">{resServ3}</li>
                    <li className="bus-li">{resServ4}</li>
                    <li className="bus-li">{resServ5}</li>
                    <li className="bus-li">{resServ6}</li>
                    <li className="bus-li">{resServ7}</li>
                  </ul>

                  <h4 className="tertiary-header">{resDesign}</h4>
                  <p className="text-description">{resDesignConcept}</p>
                  <p className="text-description">{ourServ}</p>
                  <ul className="port-ul">
                    <li className="bus-li">{resDesignServ1}</li>
                    <li className="bus-li">{resDesignServ2}</li>
                    <li className="bus-li">{resDesignServ3}</li>
                    <li className="bus-li">{resDesignServ4}</li>
                    <li className="bus-li">{resDesignServ5}</li>
                    <li className="bus-li">{resDesignServ6}</li>
                    <li className="bus-li">{resDesignServ7}</li>
                    <li className="bus-li">{resDesignServ8}</li>
                    <li className="bus-li">{resDesignServ9}</li>
                  </ul>

                  <h4 className="text-description title res">{res}</h4>
                  <ul className="port-ul">
                    <li className="bus-li">{fb1}</li>
                    <li className="bus-li">{fb2}</li>
                    <li className="bus-li">{fb3}</li>
                    <li className="bus-li">{fb4}</li>
                    <li className="bus-li">{fb5}</li>
                    <li className="bus-li">{fb6}</li>
                    <li className="bus-li">{fb7}</li>
                    <li className="bus-li">{fb8}</li>
                    <li className="bus-li">{fb9}</li>
                    <li className="bus-li">{fb10}</li>

                    <li className="bus-li">{fb11}</li>
                    <li className="bus-li">{fb12}</li>
                    <li className="bus-li">{fb13}</li>
                    <li className="bus-li">{fb14}</li>
                    <li className="bus-li">{fb15}</li>
                    <li className="bus-li">{fb16}</li>
                    <li className="bus-li">{fb17}</li>
                    <li className="bus-li">{fb18}</li>
                    <li className="bus-li">{fb19}</li>
                  </ul>

                  <h4 className="tertiary-header">{tOperation}</h4>
                  <ul className="port-ul">
                    <li className="bus-li">{advOp1}</li>
                    <li className="bus-li">{advOp2}</li>
                    <li className="bus-li">{advOp3}</li>
                    <li className="bus-li">{advOp4}</li>
                  </ul>

                  <h4 className="tertiary-header">{cons}</h4>
                  <ul className="port-ul">
                    <li className="bus-li">{adv1}</li>
                    <li className="bus-li">{adv2}</li>
                    <li className="bus-li">{adv3}</li>
                    <li className="bus-li">{adv4}</li>
                    <li className="bus-li">{adv5}</li>
                  </ul>

                  <h4 className="tertiary-header">{finMngt}</h4>
                  <ul className="port-ul">
                    <li className="bus-li">{finMngt1}</li>
                  </ul>

                  <h4 className="tertiary-header">{servInd}</h4>
                  <p className="text-description">{servDesc}</p>
                  <ul className="port-ul">
                    <li className="bus-li">{ind1}</li>
                    <li className="bus-li">{ind2}</li>
                    <li className="bus-li">{ind3}</li>
                    <li className="bus-li">{ind4}</li>
                    <li className="bus-li">{ind5}</li>
                    <li className="bus-li">{ind6}</li>
                    <li className="bus-li">{ind7}</li>
                    <li className="bus-li">{ind8}</li>
                    <li className="bus-li">{ind9}</li>
                    <li className="bus-li">{ind10}</li>
                    <li className="bus-li">{ind11}</li>
                    <li className="bus-li">{ind12}</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default BusinessContent;
