"use client";
import { useState } from "react";
import { Car } from "@/components/client";

import styles from "./LatestCars.module.css";
import { Car as CarType } from "@/types";

const LatestCars = ({ initCars }: { initCars: CarType[] }) => {
  const [cars, setCars] = useState<CarType[]>(initCars);
  return (
    <section className={styles.cars}>
      <div className="container">
        <div className="cars-inner">
          <h3 className={styles.title}>Latest Cars</h3>
          <ul className={styles.list}>
            {cars?.map((car) => (
              <Car key={car.ID} car={car} />
            ))}
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
