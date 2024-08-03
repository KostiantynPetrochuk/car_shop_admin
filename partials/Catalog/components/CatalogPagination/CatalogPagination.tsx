import React from "react";

import "./CatalogPagination.css";

const CatalogPagination = () => {
  return (
    <div className="catalog-pagination">
      <span className="catalog-pagination-prev"></span>
      <span className="catalog-pagination-item">1</span>
      <span className="catalog-pagination-item current">2</span>
      <span className="catalog-pagination-item">3</span>
      <span className="catalog-pagination-item disabled">...</span>
      <span className="catalog-pagination-item">99</span>
      <span className="catalog-pagination-next"></span>
    </div>
  );
};

export default CatalogPagination;
