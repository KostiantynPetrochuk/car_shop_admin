import React from "react";

import "./CatalogForm.css";

const CatalogForm = () => {
  return (
    <form className="catalog-form" action="/catalog" method="GET">
      <div className="catalog-form-mob-title">
        <span className="catalog-form-mob-title-label">Filters</span>
        <button className="catalog-form-mob-title-cross" type="button">
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="catalog-filters">
        <div className="catalog-filter">
          <span className="catalog-filter-title">Condition</span>
          <div className="catalog-filter-items">
            <div className="catalog-filter-item">
              <label htmlFor="whole-cars" className="catalog-filter-item-label">
                <input
                  className="catalog-filter-item-real-checkbox"
                  type="checkbox"
                  name="whole-cars"
                  id="whole-cars"
                  data-category="condition"
                />
                <span
                  className="catalog-filter-item-fake-checkbox"
                  data-for="whole-cars"
                ></span>
              </label>
              <span className="catalog-filter-item-info">Whole Cars</span>
            </div>
            <div className="catalog-filter-item">
              <label
                htmlFor="damaged-cars"
                className="catalog-filter-item-label"
              >
                <input
                  className="catalog-filter-item-real-checkbox"
                  type="checkbox"
                  name="damaged-cars"
                  id="damaged-cars"
                  data-category="condition"
                />
                <span
                  className="catalog-filter-item-fake-checkbox"
                  data-for="whole-cars"
                ></span>
              </label>
              <span className="catalog-filter-item-info">Damaged Cars</span>
            </div>
          </div>
        </div>
        <div className="catalog-filter">
          <span className="catalog-filter-title">Make</span>
          <div className="catalog-filter-items">
            <div className="catalog-filter-item">
              <label htmlFor="audi" className="catalog-filter-item-label">
                <input
                  className="catalog-filter-item-real-checkbox"
                  type="checkbox"
                  name="audi"
                  id="audi"
                  data-category="make"
                />
                <span
                  className="catalog-filter-item-fake-checkbox"
                  data-for="audi"
                ></span>
              </label>
              <span className="catalog-filter-item-info">Audi</span>
            </div>
            <div className="catalog-filter-item">
              <label
                htmlFor="aston_martin"
                className="catalog-filter-item-label"
              >
                <input
                  className="catalog-filter-item-real-checkbox"
                  type="checkbox"
                  name="aston_martin"
                  id="aston_martin"
                  data-category="make"
                />
                <span
                  className="catalog-filter-item-fake-checkbox"
                  data-for="aston_martin"
                ></span>
              </label>
              <span className="catalog-filter-item-info">Aston Martin</span>
            </div>
          </div>
        </div>
        <div className="catalog-filter">
          <span className="catalog-filter-title">Model</span>
          <div className="catalog-filter-items">
            <div className="catalog-filter-item">
              <label htmlFor="q7" className="catalog-filter-item-label">
                <input
                  className="catalog-filter-item-real-checkbox"
                  type="checkbox"
                  name="q7"
                  id="q7"
                  data-category="model"
                />
                <span
                  className="catalog-filter-item-fake-checkbox"
                  data-for="q7"
                ></span>
              </label>
              <span className="catalog-filter-item-info">Q7</span>
            </div>
            <div className="catalog-filter-item">
              <label htmlFor="dbr" className="catalog-filter-item-label">
                <input
                  className="catalog-filter-item-real-checkbox"
                  type="checkbox"
                  name="dbr"
                  id="dbr"
                  data-category="model"
                />
                <span
                  className="catalog-filter-item-fake-checkbox"
                  data-for="dbr"
                ></span>
              </label>
              <span className="catalog-filter-item-info">DBR</span>
            </div>
          </div>
        </div>
        <div className="catalog-filter">
          <span className="catalog-filter-title">Fuel</span>
          <div className="catalog-filter-items">
            <div className="catalog-filter-item">
              <label htmlFor="petrol" className="catalog-filter-item-label">
                <input
                  className="catalog-filter-item-real-checkbox"
                  type="checkbox"
                  name="petrol"
                  id="petrol"
                  data-category="fuel"
                />
                <span
                  className="catalog-filter-item-fake-checkbox"
                  data-for="petrol"
                ></span>
              </label>
              <span className="catalog-filter-item-info">Petrol</span>
            </div>
            <div className="catalog-filter-item">
              <label htmlFor="diesel" className="catalog-filter-item-label">
                <input
                  className="catalog-filter-item-real-checkbox"
                  type="checkbox"
                  name="diesel"
                  id="diesel"
                  data-category="fuel"
                />
                <span
                  className="catalog-filter-item-fake-checkbox"
                  data-for="diesel"
                ></span>
              </label>
              <span className="catalog-filter-item-info">Diesel</span>
            </div>
            <div className="catalog-filter-item">
              <label htmlFor="electric" className="catalog-filter-item-label">
                <input
                  className="catalog-filter-item-real-checkbox"
                  type="checkbox"
                  name="electric"
                  id="electric"
                  data-category="fuel"
                />
                <span
                  className="catalog-filter-item-fake-checkbox"
                  data-for="whole-cars"
                ></span>
              </label>
              <span className="catalog-filter-item-info">Electric</span>
            </div>
          </div>
        </div>
        <div className="catalog-filter">
          <span className="catalog-filter-title">Price</span>
          <div className="catalog-filter-inputs">
            <div className="catalog-filter-input">
              <input
                className="catalog-filter-price-item-input"
                type="number"
                name="price_from"
                id="price_from"
                max="100000"
                step="1"
              />
            </div>
            -
            <div className="catalog-filter-input">
              <input
                className="catalog-filter-price-item-input"
                type="number"
                name="price_to"
                id="price_to"
                max="100000"
                step="1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="catalog-filter-submit-inner">
        <button type="submit" className="catalog-filter-submit">
          <img src="/img/search.svg" />
          <span>Search Cars</span>
        </button>
      </div>
    </form>
  );
};

export default CatalogForm;
