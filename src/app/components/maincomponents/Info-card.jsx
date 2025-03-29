"use client";
import BuyButton from "../subcomponent/buttons/Buy-button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
const InfoCard = () => {
  return (
    <section className="info-card-container">
      <div className="info-card-heading">
        <h1>
          <b>The Perfect Moment</b> <br></br> Between Past And <br></br> Future.
        </h1>
      </div>
      <BuyButton />
      <div className="arrow-wrapper">
        <div className="arrow-container">
          <FaLongArrowAltLeft />
          <p>1</p>
          <FaLongArrowAltRight />
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
