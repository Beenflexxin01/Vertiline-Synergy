import { useNavigate } from "react-router-dom";

function BusinessData({ business }) {
  const navigate = useNavigate();
  const {
    _id: businessId,
    title,
    image,
    sub1,
    sub2,
    sub3,
    sub4,
    sub5,
    sub6,
    sub7,
  } = business;
  return (
    <>
      <div className="grid-2-cols">
        <div
          onClick={() => navigate(`/businessFocus/details/${businessId}`)}
          className="focus">
          <img src={image} alt="" className="bus-img" />
          <h4 className="text-description title">{title}</h4>
          <div className="flex bus-fl">
            <button className="bus-btn">{sub1}</button>
            <button className="bus-btn">{sub2}</button>
            <button className="bus-btn">{sub3}</button>
            <button className="bus-btn">{sub4}</button>
            <button className="bus-btn">{sub5}</button>
            <button className="bus-btn">{sub6}</button>
            <button className="bus-btn">{sub7}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessData;
