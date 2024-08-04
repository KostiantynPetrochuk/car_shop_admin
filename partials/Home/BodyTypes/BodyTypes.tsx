import React from "react";

import styles from "./BodyTypes.module.css";

const BodyTypes = () => {
  return (
    <section className="types">
      <div className="container">
        <div className="types-inner">
          <h3 className={styles.title}>Browse by Type</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/suv_logo.svg"
                  alt="SUV logo"
                />
                <span className={styles.name}>SUV</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/sedan_logo.svg"
                  alt="Sedan logo"
                />
                <span className={styles.name}>Sedan</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/hatchback_logo.svg"
                  alt="Hatchback logo"
                />
                <span className={styles.name}>Hatchback</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/coupe_logo.svg"
                  alt="Coupe logo"
                />
                <span className={styles.name}>Coupe</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/hybrid_logo.svg"
                  alt="Hybrid logo"
                />
                <span className={styles.name}>Hybrid</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/convertible_logo.svg"
                  alt="Convertible logo"
                />
                <span className={styles.name}>Convertible</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/van_logo.svg"
                  alt="SUV logo"
                />
                <span className={styles.name}>Van</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/truck_logo.svg"
                  alt="Truck logo"
                />
                <span className={styles.name}>Truck</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/electric_logo.svg"
                  alt="Electic logo"
                />
                <span className={styles.name}>Electic</span>
              </a>
            </li>
          </ul>
          <div className={styles.bottomLinkInner}>
            <a href="#" className={styles.bottomLink}>
              <span className={styles.bottomLinkTitle}>View All</span>
              <img
                className={styles.bottomLinkArrow}
                src="/img/link_arrow_black.svg"
                alt="arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyTypes;
