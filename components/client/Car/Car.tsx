import React from "react";
import Link from "next/link";

import styles from "./Car.module.css";

type CarProps = {
  background?: string;
};

const Car = ({ background }: CarProps) => {
  const isLight = background === "lightBlue";
  const bgColor = isLight ? styles.lightBlue : styles.darkBlue;
  return (
    <li className={styles.item}>
      <div className={`${styles.top} ${bgColor}`}>
        <img
          className={styles.carImage}
          src="/img/card_item.jpg"
          alt="card_item"
        />
        <div className={styles.category}>Great Price</div>
      </div>
      <div className={`${styles.bot} ${bgColor}`}>
        <div className={styles.row}>
          <span className={styles.title}>Ford Transit - 2021</span>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <img
              className={styles.logo}
              src="/img/speed_logo.svg"
              alt="speed_logo"
            />
            <span className={styles.label}>2500 miles</span>
          </div>
          <div className={styles.col}>
            <img
              className={styles.logo}
              src="/img/fuel_logo.svg"
              alt="fuel_logo"
            />
            <span className={styles.label}>Diesel</span>
          </div>
          <div className={styles.col}>
            <img
              className={styles.logo}
              src="/img/transmission_logo.svg"
              alt="transmission_logo"
            />
            <span className={styles.label}>Manual</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <span className={styles.price}>$22.000</span>
          </div>
          <Link href="/car" className={styles.link}>
            <span>View Details</span>
            <img
              className={styles.arrow}
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
