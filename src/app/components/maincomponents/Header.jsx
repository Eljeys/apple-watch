"use client";
//sfc
import { FaApple } from "react-icons/fa6";
import NavLink from "../subcomponent/links/Links";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <FaApple size={45} />
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink linkName={"Mac"} />
          </li>
          <li>
            {" "}
            <NavLink linkName={"iPhone"} />
          </li>
          <li>
            {" "}
            <NavLink linkName={"iPad"} />
          </li>
          <li>
            {" "}
            <NavLink linkName={"iWatch"} />
          </li>
          <li>
            {" "}
            <NavLink linkName={"Support"} />
          </li>
        </ul>
      </nav>
      <div className="icon-container">
        <FaMagnifyingGlass />
        <LuShoppingBag />
      </div>
    </header>
  );
};

export default Header;
