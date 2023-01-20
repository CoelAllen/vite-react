import React from "react";
// @ts-ignore
import star from "../assets/Star1.png";

export default function Card({
  title,
  description,
  price,
  coverImg,
  stats,
  location,
  openSpots,
}) {
  return (
    <div className="card">
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
