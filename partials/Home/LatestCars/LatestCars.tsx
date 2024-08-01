import React from "react";
import { Car } from "@/components/client";

import "./LatestCars.css";

const LatestCars = () => {
  return (
    <section className="cars">
      <div className="container">
        <div className="cars-inner">
          <h3 className="cars-title">Latest Cars</h3>
          <ul className="cars-list">
            <Car />
            <Car />
            <Car />
            <Car />
          </ul>
          <div className="cars-button-inner">
            <button className="cars-button">Show More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCars;
