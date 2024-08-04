import React from "react";

import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.item}>
            <div className={styles.itemLeft}>
              <h3 className={styles.title}>Are You Looking</h3>
              <h3 className={styles.title}>For a Car ?</h3>
              <span className={styles.info}>
                We are committed to providing our customers with exceptional
                service.
              </span>
              <a href="#" className={styles.link}>
                <span>Get Started</span>
                <img className={styles.arrow} src="img/link_arrow.svg" alt="" />
              </a>
            </div>
            <div className={styles.itemRight}>
              <img
                className={styles.logo}
                src="img/electric_car_logo.svg"
                alt=""
              />
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.itemLeft}>
              <h3 className={styles.title}>Do You Want to</h3>
              <h3 className={styles.title}>Sell a Car ?</h3>
              <span className={styles.info}>
                We are committed to providing our customers with exceptional
                service.
              </span>
              <a href="#" className={styles.link}>
                <span>Get Started</span>
                <img className={styles.arrow} src="img/link_arrow.svg" alt="" />
              </a>
            </div>
            <div className={styles.itemRight}>
              <img
                className={styles.logo}
                src="img/electric-car2_logo.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
