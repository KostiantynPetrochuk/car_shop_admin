import React from "react";

import styles from "./CatalogPagination.module.css";

const CatalogPagination = () => {
  return (
    <div className={styles.pagination}>
      <span className={styles.prev}></span>
      <span className={styles.item}>1</span>
      <span className={`${styles.item} ${styles.current}`}>2</span>
      <span className={styles.item}>3</span>
      <span className={`${styles.item} ${styles.disabled}`}>...</span>
      <span className={styles.item}>99</span>
      <span className={styles.prev}></span>
    </div>
  );
};

export default CatalogPagination;
