import React from "react";

import styles from "./OrderCard.module.css";

const OrderCard = () => {
  return (
    <div className={styles.item}>
      <div className={styles.col}>
        <img src="/img/order_item.png" alt="order_item" />
      </div>
      <div className={styles.col}>
        <h3>T-Cross – 2023</h3>
        <div>
          <div className={styles.row}>
            <img
              className={styles.logo}
              src="/img/speed_logo.svg"
              alt="speed_logo"
            />
            <span>250 000 km</span>
          </div>
          <div className={styles.row}>
            <img
              className={styles.logo}
              src="/img/fuel_logo.svg"
              alt="fuel_logo"
            />
            <span>Petrol</span>
          </div>
          <div className={styles.row}>
            <img
              className={styles.logo}
              src="/img/transmission_logo.svg"
              alt="transmission_logo"
            />
            <span>CVT</span>
          </div>
        </div>
        <div className={styles.bot}>$15.000</div>
      </div>
    </div>
  );
};

export default OrderCard;
