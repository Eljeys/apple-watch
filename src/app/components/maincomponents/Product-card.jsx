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
    <section className="product-card-container">
      <figure className="product-card-image">
        <Image
          src={imageSelected}
          alt="Picture of a navy colored Apple watch"
          /*style={{ width: "auto", height: "auto" }}*/
        />
      </figure>

      <div className="small-product-pics-container">
        <figure
          className="small-watch-img"
          onClick={() => handleSmallImageClick(AppleWatchNavy)}
          style={{ cursor: "pointer" }}
        >
          <div className="watch-background"></div>
          <Image
            src={AppleWatchNavy}
            alt="Picture of a navy colored Apple watch"
            width={90}
            height={90}
          />
        </figure>
        <figure
          className="small-watch-img"
          onClick={() => handleSmallImageClick(AppleWatchOcean)}
          style={{ cursor: "pointer" }}
        >
          <div className="watch-background"></div>
          <Image
            data-color="ocean"
            src={AppleWatchOcean}
            alt="Picture of a ocean colored Apple watch"
            width={90}
            height={90}
          />
        </figure>
        <figure
          className="small-watch-img"
          onClick={() => handleSmallImageClick(AppleWatcMint)}
          style={{ cursor: "pointer" }}
        >
          <div className="watch-background"></div>
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
