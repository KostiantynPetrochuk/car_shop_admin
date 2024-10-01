"use client";
import React, { useState } from "react";
import styles from "./SortForm.module.css";

const sortOptions = [
  { value: "", label: "Default" },
  { value: "price_low_to_high", label: "Price (Low to High)" },
  { value: "price_high_to_low", label: "Price (High to Low)" },
];

type SortFormProps = {
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  start: number;
  end: number;
  total: number;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

const SortForm = ({
  setFormVisible,
  start,
  end,
  total,
  sortBy,
  setSortBy,
}: SortFormProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpen = () => {
    setFormVisible(true);
    const body = document.querySelector("body");
    if (!body) return;
    body.classList.add("freezed");
  };

  const handleSelectClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue);
    setIsDropdownOpen(false);
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
            <div className={styles.select} onClick={handleSelectClick}>
              <span>
                {sortOptions.find((option) => option.value === sortBy)?.label}
              </span>
              {isDropdownOpen && (
                <div className={styles.dropdown}>
                  <span
                    data-sort=""
                    className={styles.dropdownItem}
                    onClick={() => handleSortChange("")}
                  >
                    Default
                  </span>
                  <span
                    data-sort="price_low_to_high"
                    className={styles.dropdownItem}
                    onClick={() => handleSortChange("price_low_to_high")}
                  >
                    Price (Low to High)
                  </span>
                  <span
                    data-sort="price_high_to_low"
                    className={styles.dropdownItem}
                    onClick={() => handleSortChange("price_high_to_low")}
                  >
                    Price (High to Low)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SortForm;
