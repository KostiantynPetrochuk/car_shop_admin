import React from "react";

import styles from "./CatalogForm.module.css";

const CatalogForm = () => {
  return (
    <form className={styles.form} action="/catalog" method="GET">
      <div className={styles.mobTitle}>
        <span>Filters</span>
        <button className={styles.mobCross} type="button">
          <span className={styles.mobCrossItem}></span>
          <span className={styles.mobCrossItem}></span>
        </button>
      </div>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <span className={styles.title}>Condition</span>
          <div className={styles.items}>
            <div className={styles.item}>
              <label htmlFor="intact-cars" className={styles.label}>
                <input
                  className={styles.realCheckbox}
                  type="checkbox"
                  name="intact-cars"
                  id="intact-cars"
                  data-category="condition"
                />
                <span
                  className={styles.fakeCheckbox}
                  data-for="intact-cars"
                ></span>
              </label>
              <span className={styles.info}>intact Cars</span>
            </div>
            <div className={styles.item}>
              <label htmlFor="damaged-cars" className={styles.label}>
                <input
                  className={styles.realCheckbox}
                  type="checkbox"
                  name="damaged-cars"
                  id="damaged-cars"
                  data-category="condition"
                />
                <span
                  className={styles.fakeCheckbox}
                  data-for="intact-cars"
                ></span>
              </label>
              <span className={styles.info}>Damaged Cars</span>
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Make</span>
          <div className={styles.items}>
            <div className={styles.item}>
              <label htmlFor="audi" className={styles.label}>
                <input
                  className={styles.realCheckbox}
                  type="checkbox"
                  name="audi"
                  id="audi"
                  data-category="make"
                />
                <span className={styles.fakeCheckbox} data-for="audi"></span>
              </label>
              <span className={styles.info}>Audi</span>
            </div>
            <div className={styles.item}>
              <label htmlFor="aston_martin" className={styles.label}>
                <input
                  className={styles.realCheckbox}
                  type="checkbox"
                  name="aston_martin"
                  id="aston_martin"
                  data-category="make"
                />
                <span
                  className={styles.fakeCheckbox}
                  data-for="aston_martin"
                ></span>
              </label>
              <span className={styles.info}>Aston Martin</span>
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Model</span>
          <div className={styles.items}>
            <div className={styles.item}>
              <label htmlFor="q7" className={styles.label}>
                <input
                  className={styles.realCheckbox}
                  type="checkbox"
                  name="q7"
                  id="q7"
                  data-category="model"
                />
                <span className={styles.fakeCheckbox} data-for="q7"></span>
              </label>
              <span className={styles.info}>Q7</span>
            </div>
            <div className={styles.item}>
              <label htmlFor="dbr" className={styles.label}>
                <input
                  className={styles.realCheckbox}
                  type="checkbox"
                  name="dbr"
                  id="dbr"
                  data-category="model"
                />
                <span className={styles.fakeCheckbox} data-for="dbr"></span>
              </label>
              <span className={styles.info}>DBR</span>
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Fuel</span>
          <div className={styles.items}>
            <div className={styles.item}>
              <label htmlFor="petrol" className={styles.label}>
                <input
                  className={styles.realCheckbox}
                  type="checkbox"
                  name="petrol"
                  id="petrol"
                  data-category="fuel"
                />
                <span className={styles.fakeCheckbox} data-for="petrol"></span>
              </label>
              <span className={styles.info}>Petrol</span>
            </div>
            <div className={styles.item}>
              <label htmlFor="diesel" className={styles.label}>
                <input
                  className={styles.realCheckbox}
                  type="checkbox"
                  name="diesel"
                  id="diesel"
                  data-category="fuel"
                />
                <span className={styles.fakeCheckbox} data-for="diesel"></span>
              </label>
              <span className={styles.info}>Diesel</span>
            </div>
            <div className={styles.item}>
              <label htmlFor="electric" className={styles.label}>
                <input
                  className={styles.realCheckbox}
                  type="checkbox"
                  name="electric"
                  id="electric"
                  data-category="fuel"
                />
                <span
                  className={styles.fakeCheckbox}
                  data-for="intact-cars"
                ></span>
              </label>
              <span className={styles.info}>Electric</span>
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Price</span>
          <div className={styles.inputs}>
            <div className={styles.inputInner}>
              <input
                className={styles.priceInput}
                type="number"
                name="price_from"
                id="price_from"
                max="100000"
                step="1"
              />
            </div>
            -
            <div className={styles.inputInner}>
              <input
                className={styles.priceInput}
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

      <div className={styles.submitInner}>
        <button type="submit" className={styles.submit}>
          <img src="/img/search.svg" />
          <span>Search Cars</span>
        </button>
      </div>
    </form>
  );
};

export default CatalogForm;
