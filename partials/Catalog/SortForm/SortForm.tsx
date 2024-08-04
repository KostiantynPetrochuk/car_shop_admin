import React from "react";
import styles from "./SortForm.module.css";

const SortForm = () => {
  return (
    <section className={styles.sort}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.results}>Showing 1 – 12 of 15 results</div>
          <div className={styles.filter}>
            <img className={styles.logo} src="/img/filter.svg" alt="" />
            <span className={styles.title}>Filters</span>
          </div>
          <div className={styles.action}>
            <span className={styles.title}>Sort by:</span>
            <div className={styles.select}>
              <span>Default</span>
              <div className={styles.dropdown}>
                <span data-sort="default" className={styles.dropdownItem}>
                  Default
                </span>
                <span data-sort="low_to_hight" className={styles.dropdownItem}>
                  Price (Low to High)
                </span>
                <span data-sort="hight_to_low" className={styles.dropdownItem}>
                  Price (High to Low)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SortForm;
