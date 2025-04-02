"use client";
import Image from "next/image";
import AppleWatchNavy from "/public/navy.png";
import AppleWatcMint from "/public/mint.png";
import AppleWatchOcean from "/public/ocean.png";
import { useState } from "react";

const ProductCard = () => {
  const [imageSelected, setImageSelected] = useState(AppleWatchNavy);
  const handleSmallImageClick = (imageSrc) => {
    setImageSelected(imageSrc);
  };
  return (
    <section className="grid grid-rows-[1fr auto auto]">
      <figure className="grid items-center justify-center my-16">
        <Image
          src={imageSelected}
          alt="Picture of a navy colored Apple watch"
          style={{ width: "auto", height: "auto" }}
        />
      </figure>

      <div className="flex gap-16 items-center justify-center px-24 mt-12 row-start-4">
        <figure
          className="flex items-center justify-center"
          onClick={() => handleSmallImageClick(AppleWatchNavy)}
          style={{ cursor: "pointer" }}
        >
          <div
            className="absolute after:content-[div] w-[120px] h-[70px] rounded-xl -z-[1]"
            style={{ backgroundColor: "#404354" }}
          ></div>
          <Image
            src={AppleWatchNavy}
            alt="Picture of a navy colored Apple watch"
            width={90}
            height={90}
          />
        </figure>
        <figure
          className="flex items-center justify-center"
          onClick={() => handleSmallImageClick(AppleWatchOcean)}
          style={{ cursor: "pointer" }}
        >
          <div
            className="absolute after:content-[div] w-[120px] h-[70px] rounded-xl -z-[1] "
            style={{ backgroundColor: "#c0d2e1" }}
          ></div>
          <Image
            data-color="ocean"
            src={AppleWatchOcean}
            alt="Picture of a ocean colored Apple watch"
            width={90}
            height={90}
          />
        </figure>
        <figure
          className="flex items-center justify-center"
          onClick={() => handleSmallImageClick(AppleWatcMint)}
          style={{ cursor: "pointer" }}
        >
          <div
            className="absolute after:content-[div] w-[120px] h-[70px] rounded-xl -z-[1]"
            style={{ backgroundColor: "#58d7c4" }}
          ></div>
          <Image
            data-color="mint"
            src={AppleWatcMint}
            alt="Picture of a mint colored Apple watch"
            width={90}
            height={90}
          />
        </figure>
      </div>
    </section>
  );
};

export default ProductCard;
