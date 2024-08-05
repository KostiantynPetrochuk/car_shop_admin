import React from "react";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className={styles.inner}>
          <div className="hero-left">
            <div className={styles.badges}>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_calendar.svg"
                  alt="calendar_badge"
                />
                <span>2021</span>
              </div>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_speed.svg"
                  alt="speed_badge"
                />
                <span>250 000 km</span>
              </div>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_transmission.svg"
                  alt=""
                />
                <span>Manual</span>
              </div>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_fuel.svg"
                  alt=""
                />
                <span>Petrol</span>
              </div>
            </div>
            <div>
              <img
                className={styles.sliderImg}
                src="/img/test_car.jpg"
                alt="Car Image"
              />
            </div>
          </div>
          <div className={styles.right}>
            <span>Price</span>
            <span className={styles.price}>$165 000</span>
            <a className={styles.link} href="#">
              <img
                className={styles.linkLogo}
                src="/img/badge_link.svg"
                alt=""
              />
              <span>Place an Order</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
