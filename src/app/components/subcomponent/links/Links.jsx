"use client";
import Link from "next/link";

const NavLink = (props) => {
  return (
    <Link
      href={{
        pathname: "#",
      }}
    >
      {props.linkName}
    </Link>
  );
};
export default NavLink;
