"use client";
import React from "react";
import styles from "./SortForm.module.css";

type SortFormProps = {
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  start: number;
  end: number;
  total: number;
};

const SortForm = ({ setFormVisible, start, end, total }: SortFormProps) => {
  const handleOpen = () => {
    setFormVisible(true);
    const body = document.querySelector("body");
    if (!body) return;
    body.classList.add("freezed");
  };
  return (
    <section className={styles.sort}>
      <div className="container">
        <div className={styles.inner}>
          <div
            className={styles.results}
          >{`Showing ${start} – ${end} of ${total} results`}</div>
          <button type="button" className={styles.filter} onClick={handleOpen}>
            <img className={styles.logo} src="/img/filter.svg" alt="" />
            <span className={styles.title}>Filters</span>
          </button>
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
