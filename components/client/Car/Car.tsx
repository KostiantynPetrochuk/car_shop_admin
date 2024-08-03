import React from "react";
import Link from "next/link";

import "./Car.css";

type CarProps = {
  background?: string;
};

const Car = ({ background = "" }: CarProps) => {
  return (
    <li className="card-list-item">
      <div className={`card-list-item-top ${background}`}>
        <img src="/img/card_item.jpg" alt="card_item" />
        <div className="card-list-item-top-category">Great Price</div>
      </div>
      <div className={`card-list-item-bot ${background}`}>
        <div className="card-list-item-bot-row">
          <span className="card-list-item-bot-row-title">
            Ford Transit - 2021
          </span>
        </div>
        <div className="card-list-item-bot-row">
          <div className="card-list-item-bot-col">
            <img
              className="card-list-item-bot-col-logo"
              src="/img/speed_logo.svg"
              alt="speed_logo"
            />
            <span className="card-list-item-bot-label">2500 miles</span>
          </div>
          <div className="card-list-item-bot-col">
            <img
              className="card-list-item-bot-col-logo"
              src="/img/fuel_logo.svg"
              alt="fuel_logo"
            />
            <span className="card-list-item-bot-label">Diesel</span>
          </div>
          <div className="card-list-item-bot-col">
            <img
              className="card-list-item-bot-col-logo"
              src="/img/transmission_logo.svg"
              alt="transmission_logo"
            />
            <span className="card-list-item-bot-label">Manual</span>
          </div>
        </div>
        <div className="card-list-item-bot-row">
          <div className="card-list-item-bot-col">
            <span className="card-list-item-bot-label-price">$22.000</span>
          </div>
          <Link href="/car" className="card-list-item-bot-link">
            <span className="card-list-item-bot-link-title">View Details</span>
            <img
              className="card-list-item-bot-link-arrow"
              src="/img/link_arrow.svg"
              alt="link arrow"
            />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Car;
