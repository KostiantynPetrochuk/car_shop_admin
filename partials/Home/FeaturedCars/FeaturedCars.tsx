import React from "react";

import { Car } from "@/components/client";
import styles from "./FeaturedCars.module.css";

const FeaturedCars = () => {
  return (
    <section className={styles.featured}>
      <div className="container">
        <div className="featured-inner">
          <div className={styles.top}>
            <h3 className={styles.title}>Featured Cars</h3>
            <a href="#" className="featured-link">
              <span className={styles.text}>View All</span>
              <img
                className={styles.arrow}
                src="/img/link_arrow.svg"
                alt="arrow-link"
              />
            </a>
          </div>
          <div className={styles.tabs}>
            <span className={styles.item}>Whole Cars</span>
            <span className={`${styles.item} ${styles.selected}`}>
              Damaged Cars
            </span>
          </div>
          <div>
            <ul className="cars-list">
              <Car background="lightBlue" />
              <Car background="lightBlue" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
