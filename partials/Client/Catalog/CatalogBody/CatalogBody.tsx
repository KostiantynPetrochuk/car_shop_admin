import React from "react";
import { Car } from "@/components/client";
import {
  CatalogForm,
  CatalogPagination,
  CatalogFormBg,
} from "@/partials/Client/Catalog/components";

import styles from "./CatalogBody.module.css";

const CatalogBody = () => {
  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles.inner}>
          <CatalogFormBg />
          <CatalogForm />
          <ul className={styles.carsList}>
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
          </ul>
        </div>
        <CatalogPagination />
      </div>
    </section>
  );
};

export default CatalogBody;
