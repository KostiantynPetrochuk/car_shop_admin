import React from "react";
import Image from "next/image";
import { Car as CarType } from "@/types";

import styles from "./OrderCard.module.css";

const OrderCard = ({ car }: { car: CarType }) => {
  return (
    <div className={styles.item}>
      <div className={styles.col}>
        <Image
          src={`http://localhost:3001/uploads/cars/${car.ImageNames[0]}`}
          alt={`${car.BrandName} logo`}
          width={350}
          height={300}
          priority={true}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.col}>
        <h3>
          {car.BrandName} {car.ModelName} - {car.Year}
        </h3>
        <div>
          <div className={styles.row}>
            <img
              className={styles.logo}
              src="/img/speed_logo.svg"
              alt="speed_logo"
            />
            <span>{car.Mileage.toLocaleString()} km</span>
          </div>
          <div className={styles.row}>
            <img
              className={styles.logo}
              src="/img/fuel_logo.svg"
              alt="fuel_logo"
            />
            <span>{car.FuelType}</span>
          </div>
          <div className={styles.row}>
            <img
              className={styles.logo}
              src="/img/transmission_logo.svg"
              alt="transmission_logo"
            />
            <span>{car.Transmission}</span>
          </div>
        </div>
        <div className={styles.bot}>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(car?.Price)}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
