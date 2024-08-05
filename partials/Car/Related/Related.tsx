import React from "react";
import { Car } from "@/components/client";

import styles from "./Related.module.css";

const Related = () => {
  return (
    <section className={styles.related}>
      <div className="container">
        <div className="related-inner">
          <h3 className={styles.title}>Related Cars</h3>
          <ul className={styles.list}>
            <Car />
            <Car />
            <Car />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Related;
