"use client";
import React, { useEffect } from "react";

import { CONDITION } from "@/constants";

import styles from "./CatalogForm.module.css";
import { Brand } from "@/types";

type ConditionFormProps = {
  condition: string[];
  setCondition: React.Dispatch<React.SetStateAction<string[]>>;
  brands: Brand[];
  currentBrand: string | null;
  setCurrentBrand: React.Dispatch<React.SetStateAction<string | null>>;
};

const CatalogForm = ({
  condition,
  setCondition,
  brands,
  currentBrand,
  setCurrentBrand,
}: ConditionFormProps) => {
  const handleChangeCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCondition((prev) => {
      if (checked) {
        return [...prev, name];
      }
      return prev.filter((item) => item !== name);
    });
  };

  const handleChangeBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const currentBrandId = checked ? name : null;
    if (!currentBrandId) {
      setCurrentBrand(null);
      return;
    }
    const currentBrand = brands.find((brand) => brand.ID == currentBrandId);
    setCurrentBrand(currentBrand?.BrandName || null);
  };

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
            {Object.entries(CONDITION).map(([key, value]) => (
              <div className={styles.item} key={key}>
                <label htmlFor={key} className={styles.label}>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name={key}
                    id={key}
                    data-category="condition"
                    checked={condition[key as keyof typeof condition]}
                    onChange={handleChangeCondition}
                  />
                  <span className={styles.fakeCheckbox} data-for={key}></span>
                </label>
                <span className={styles.info}>{value.label.en}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Brands</span>
          <div className={styles.items}>
            {brands?.map((brand) => (
              <div className={styles.item} key={brand.ID}>
                <label htmlFor={brand.ID} className={styles.label}>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name={brand.ID}
                    id={brand.ID}
                    data-category="brand"
                    checked={currentBrand === brand.BrandName}
                    onChange={handleChangeBrand}
                  />
                  <span
                    className={styles.fakeCheckbox}
                    data-for={brand.ID}
                  ></span>
                </label>
                <span className={styles.info}>{brand.BrandName}</span>
              </div>
            ))}
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
