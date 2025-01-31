import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = React.useState(false);
  
  return (
    <nav className={` ${isScrolling === false ?"py-10":"py-8"} fixed top-0 left-0 right-0 z-10 bg-[#2C3E50] py-10 `}>
      <div className="container flex justify-between ">
        <h2 className=" text-[#FFFFFF] uppercase text-3xl font-bold">
          <Link to={""}>Start framework</Link>
        </h2>
        <ul className="center gap-x-5">
          <li>
            <NavLink
              className={"uppercase text-white font-bold text-xl p-2"}
              to={"about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"uppercase text-white font-bold text-xl p-2"}
              to={"portfolio"}
            >
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"uppercase text-white font-bold text-xl p-2"}
              to={"contact"}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
