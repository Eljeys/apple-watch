"use client";
import Image from "next/image";
import AppleWatchNavy from "/public/navy.png";
import AppleWatcMint from "/public/mint.png";
import AppleWatchOcean from "/public/ocean.png";
import { Fragment } from "react";

const ProductCard = () => {
  return (
    <section className="product-card-container">
      <figure className="product-card-image">
        <Image
          src={AppleWatchNavy}
          alt="Picture of a navy colored Apple watch"
        />
      </figure>

      <div className="small-product-pics-container">
        <figure className="small-watch-img">
          <div className="watch-background"></div>
          <Image
            src={AppleWatchNavy}
            alt="Picture of a navy colored Apple watch"
            width={90}
            height={90}
          />
        </figure>
        <figure className="small-watch-img">
          <div className="watch-background"></div>
          <Image
            data-color="ocean"
            src={AppleWatchOcean}
            alt="Picture of a ocean colored Apple watch"
            width={90}
            height={90}
          />
        </figure>
        <figure className="small-watch-img">
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
