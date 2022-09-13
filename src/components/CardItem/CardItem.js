import React from "react";
import "./card-item.scss";
import cardImg from "./img/img-1.jpg";

export default function CardItem() {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={cardImg} alt="sneakers-img" />
        </div>
        <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
        <div className="card-price">
          <div className="price">
            <h6 className="color-grey">ЦІНА:</h6>
            <h5 className="fw-700">1200 грн</h5>
          </div>
          <button className="btn fw-700">+</button>
        </div>
      </div>
    </>
  );
}
