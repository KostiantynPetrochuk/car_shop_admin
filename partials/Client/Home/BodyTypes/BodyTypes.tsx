import React from "react";
import Link from "next/link";

import styles from "./BodyTypes.module.css";

const BodyTypes = () => {
  return (
    <section className="types">
      <div className="container">
        <div className="types-inner">
          <h3 className={styles.title}>Browse by Type</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href={`/catalog?bodyType=suv`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/suv_logo.svg"
                  alt="SUV logo"
                />
                <span className={styles.name}>SUV</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?bodyType=sedan`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/sedan_logo.svg"
                  alt="Sedan logo"
                />
                <span className={styles.name}>Sedan</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href={`/catalog?bodyType=hatchback`}
                className={styles.link}
              >
                <img
                  className={styles.logo}
                  src="/img/hatchback_logo.svg"
                  alt="Hatchback logo"
                />
                <span className={styles.name}>Hatchback</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?bodyType=coupe`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/coupe_logo.svg"
                  alt="Coupe logo"
                />
                <span className={styles.name}>Coupe</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href={`/catalog?fuelType=electricity`}
                className={styles.link}
              >
                <img
                  className={styles.logo}
                  src="/img/hybrid_logo.svg"
                  alt="Hybrid logo"
                />
                <span className={styles.name}>Electric</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href={`/catalog?bodyType=convertible`}
                className={styles.link}
              >
                <img
                  className={styles.logo}
                  src="/img/convertible_logo.svg"
                  alt="Convertible logo"
                />
                <span className={styles.name}>Convertible</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?bodyType=van`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/van_logo.svg"
                  alt="SUV logo"
                />
                <span className={styles.name}>Van</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?bodyType=truck`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/truck_logo.svg"
                  alt="Truck logo"
                />
                <span className={styles.name}>Truck</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?bodyType=diesel`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/electric_logo.svg"
                  alt="Electic logo"
                />
                <span className={styles.name}>Diesel</span>
              </Link>
            </li>
          </ul>
          <div className={styles.bottomLinkInner}>
            <Link href={`/catalog`} className={styles.bottomLink}>
              <span className={styles.bottomLinkTitle}>View All</span>
              <img
                className={styles.bottomLinkArrow}
                src="/img/link_arrow_black.svg"
                alt="arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyTypes;
