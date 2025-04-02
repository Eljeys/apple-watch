"use client";
//sfc
import { FaApple } from "react-icons/fa6";
import NavLink from "../subcomponent/links/Links";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 mb-20">
      <div className="logo">
        <FaApple size={45} />
      </div>
      <nav>
        <ul className="flex flex-row gap-8 items-center">
          <li className="hover:font-bold hover:rounded-[0.5rem] hover:py-[0.5rem] hover:px-4 hover:w-fit hover:bg-white">
            <NavLink linkName={"Mac"} />
          </li>
          <li className="hover:font-bold hover:rounded-[0.5rem] hover:py-[0.5rem] hover:px-4 hover:w-fit hover:bg-white">
            {" "}
            <NavLink linkName={"iPhone"} />
          </li>
          <li className="hover:font-bold hover:rounded-[0.5rem] hover:py-[0.5rem] hover:px-4 hover:w-fit hover:bg-white">
            {" "}
            <NavLink linkName={"iPad"} />
          </li>
          <li className="hover:font-bold hover:rounded-[0.5rem] hover:py-[0.5rem] hover:px-4 hover:w-fit hover:bg-white">
            {" "}
            <NavLink linkName={"iWatch"} />
          </li>
          <li className="hover:font-bold hover:rounded-[0.5rem] hover:py-[0.5rem] hover:px-4 hover:w-fit hover:bg-white">
            {" "}
            <NavLink linkName={"Support"} />
          </li>
        </ul>
      </nav>
      <div className="flex gap-[0.5rem] w-10 mx-4">
        <FaMagnifyingGlass />
        <LuShoppingBag />
      </div>
    </header>
  );
};

export default Header;
