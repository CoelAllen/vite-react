import React from "react";
// @ts-ignore
import star from "../assets/Star1.png";

export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
}) {
  return (
    <div className="card">
      <img src={img} alt="" className="card--img" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) •</span>
        <span className="gray">/{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
