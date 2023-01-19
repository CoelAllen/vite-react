import React from "react";
// @ts-ignore
import group from "../assets/Group77.png";
export default function Hero() {
  return (
    <>
      <div className="hero">
        <img src={group} alt="" className="hero--img" />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving the home.
        </p>
      </div>
    </>
  );
}
