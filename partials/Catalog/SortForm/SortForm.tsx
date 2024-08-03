import React from "react";

import "./SortForm.css";

const SortForm = () => {
  return (
    <section className="catalog-sort">
      <div className="container">
        <div className="catalog-sort-inner">
          <div className="catalog-sort-results">
            Showing 1 – 12 of 15 results
          </div>
          <div className="catalog-sort-filter">
            <img
              className="catalog-sort-filter-logo"
              src="/img/filter.svg"
              alt=""
            />
            <span>Filters</span>
          </div>
          <div className="catalog-sort-action">
            <span className="catalog-sort-title">Sort by:</span>
            <div className="catalog-sort-select">
              <span className="catalog-sort-select-current">Default</span>
              <div className="catalog-sort-select-dropdown">
                <span
                  data-sort="default"
                  className="catalog-sort-select-dropdown-item"
                >
                  Default
                </span>
                <span
                  data-sort="low_to_hight"
                  className="catalog-sort-select-dropdown-item"
                >
                  Price (Low to High)
                </span>
                <span
                  data-sort="hight_to_low"
                  className="catalog-sort-select-dropdown-item"
                >
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
