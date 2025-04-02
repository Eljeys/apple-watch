"use client";
import BuyButton from "../subcomponent/buttons/Buy-button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
const InfoCard = () => {
  return (
    <section className="grid grid-rows-[1fr auto auto]">
      <div className="my-16">
        <h1 className="text-5xl">
          <b>The Perfect Moment</b> <br></br> Between Past And <br></br> Future.
        </h1>
      </div>
      <BuyButton />
      <div className="grid row-end-4 my-12">
        <div className="flex items-center gap-[0.2rem]">
          <FaLongArrowAltLeft />
          <p>1</p>
          <FaLongArrowAltRight />
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
