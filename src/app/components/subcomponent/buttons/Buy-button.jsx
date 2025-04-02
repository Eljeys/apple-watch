"use client";
import Link from "next/link";

const BuyButton = () => {
  return (
    <Link
      href={"#"}
      className="grid border-2 w-fit px-28 py-4 rounded-3xl font-bold text-2xl "
    >
      Buy
    </Link>
  );
};

export default BuyButton;
