import React from "react";
import { useLocation } from "react-router-dom";

export default function Heading({ text }) {
  const { pathname } = useLocation();
  return (
    <>
      <h1
        className={`${
          pathname === "/" || pathname === "/about"
            ? "text-white"
            : "text-[#2C3E50]"
        } uppercase text-5xl mt-5 text-white font-bold`}
      >
        {" "}
        {text}{" "}
      </h1>
    </>
  );
}
