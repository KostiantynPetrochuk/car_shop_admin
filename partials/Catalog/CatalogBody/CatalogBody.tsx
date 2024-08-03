import React from "react";
import { Car } from "@/components/client";
import { CatalogForm, CatalogPagination } from "@/partials/Catalog/components";

import "./CatalogBody.css";

const CatalogBody = () => {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog-inner">
          <div className="catalog-form-bg"></div>
          <CatalogForm />
          <ul className="cars-list">
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
