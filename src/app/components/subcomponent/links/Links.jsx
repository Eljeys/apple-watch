"use client";
import Link from "next/link";

const NavLink = (props) => {
  return <Link href={props.href}>{props.linkName}</Link>;
};
export default NavLink;
