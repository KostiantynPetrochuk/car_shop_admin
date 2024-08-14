import React from "react";
import { Car } from "@/components/client";

import styles from "./LatestCars.module.css";

const LatestCars = () => {
  return (
    <section className={styles.cars}>
      <div className="container">
        <div className="cars-inner">
          <h3 className={styles.title}>Latest Cars</h3>
          <ul className={styles.list}>
            <Car />
            <Car />
            <Car />
            <Car />
          </ul>
          <div className={styles.buttonInner}>
            <button className={styles.button}>Show More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCars;
