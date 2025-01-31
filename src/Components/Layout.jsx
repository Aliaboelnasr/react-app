import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
export default function Layout() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <Navbar />
      <div
        className={`${
          pathname === "/" || pathname === "/about"
            ? "bg-[#1ABC9C]"
            : "bg-white"
        } min-h-dvh center pt-36`}
      >
        <div className="container text-center">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
