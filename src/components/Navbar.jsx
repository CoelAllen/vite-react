import React from "react";
// @ts-ignore
import logo from "../assets/airbnb1.png";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" className="nav--logo" />
    </nav>
  );
}
