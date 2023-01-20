import React from "react";
// @ts-ignore
import star from "../assets/Star1.png";

export default function Card({
  title,
  price,
  coverImg,
  stats,
  location,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../src/assets/${coverImg}`} alt="" className="card--img" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{stats.rating}</span>
        <span className="gray">({stats.reviewCount}) •</span>
        <span className="gray">/{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
