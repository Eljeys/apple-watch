"use client";
import BuyButton from "../subcomponent/buttons/Buy-button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
const InfoCard = () => {
  return (
    <section className="info-card-container">
      <h1>
        The Perfect Moment <br></br> Between Past And <br></br> Future.
      </h1>
      <BuyButton />
      <div className="arrow-container">
        <FaLongArrowAltLeft />
        <p>1</p>
        <FaLongArrowAltRight />
      </div>
    </section>
  );
};

export default InfoCard;
