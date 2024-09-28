"use client";
import React, { useState } from "react";

import { CONDITION, BODY_TYPES } from "@/constants";
import styles from "./CatalogForm.module.css";
import { Brand, Model } from "@/types";

const mileages = [
  { value: "", label: "All" },
  { value: "10000", label: "10 000" },
  { value: "20000", label: "20 000" },
  { value: "30000", label: "30 000" },
  { value: "40000", label: "40 000" },
  { value: "50000", label: "50 000" },
  { value: "60000", label: "60 000" },
  { value: "70000", label: "70 000" },
  { value: "80000", label: "80 000" },
  { value: "90000", label: "90 000" },
  { value: "100000", label: "100 000" },
];

const fuelTypes = [
  { value: "petrol", label: "Petrol" },
  { value: "diesel", label: "Diesel" },
  { value: "electric", label: "Electric" },
  { value: "hybrid", label: "Hybrid" },
];

type ConditionFormProps = {
  condition: string[];
  setCondition: React.Dispatch<React.SetStateAction<string[]>>;
  brands: Brand[];
  currentBrand: string | null;
  setCurrentBrand: React.Dispatch<React.SetStateAction<string | null>>;
  currentModels: string[];
  setCurrentModels: React.Dispatch<React.SetStateAction<string[]>>;
  currentBodyTypes: string[];
  setCurrentBodyTypes: React.Dispatch<React.SetStateAction<string[]>>;
  mileageFrom: string;
  setMileageFrom: React.Dispatch<React.SetStateAction<string>>;
  mileageTo: string;
  setMileageTo: React.Dispatch<React.SetStateAction<string>>;
  currentFuelTypes: string[];
  setCurrentFuelTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

const CatalogForm = ({
  condition,
  setCondition,
  brands,
  currentBrand,
  setCurrentBrand,
  currentModels,
  setCurrentModels,
  currentBodyTypes,
  setCurrentBodyTypes,
  mileageFrom,
  setMileageFrom,
  mileageTo,
  setMileageTo,
  currentFuelTypes,
  setCurrentFuelTypes,
}: ConditionFormProps) => {
  const [isDropdownFromVisible, setIsDropdownFromVisible] = useState(false);
  const [isDropdownToVisible, setIsDropdownToVisible] = useState(false);

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
    setCurrentModels([]);
  };

  const handleChangeModel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCurrentModels((prev) => {
      if (checked) {
        return [...prev, name];
      }
      return prev.filter((item) => item !== name);
    });
  };

  const handleChangeBodyType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCurrentBodyTypes((prev) => {
      if (checked) {
        return [...prev, name];
      }
      return prev.filter((item) => item !== name);
    });
  };

  const handleSelectMileageFrom = () => {
    setIsDropdownFromVisible((prev) => !prev);
    setIsDropdownToVisible(false);
  };
  const handleSelectMileageTo = () => {
    setIsDropdownToVisible((prev) => !prev);
    setIsDropdownFromVisible(false);
  };

  const handleSelectMileageItemFrom = (mileage: string) => {
    setMileageFrom(mileage);
  };

  const handleSelectMileageItemTo = (mileage: string) => {
    setMileageTo(mileage);
  };

  const handleChangeFuelType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCurrentFuelTypes((prev) => {
      if (checked) {
        return [...prev, name];
      }
      return prev.filter((item) => item !== name);
    });
  };

  const selectedBrand = brands.find(
    (brand) => brand.BrandName === currentBrand
  );

  const modelsIds =
    selectedBrand?.Models?.filter((model: Model) => {
      return currentModels.includes(model.ModelName);
    }).map((model) => model.ID) || [];

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
                    checked={condition.includes(key)}
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
        {currentBrand ? (
          <div className={styles.filter}>
            <span className={styles.title}>Models</span>
            <div className={styles.items}>
              {selectedBrand?.Models?.map((model) => (
                <div className={styles.item} key={model.ID}>
                  <label htmlFor={model.ModelName} className={styles.label}>
                    <input
                      className={styles.realCheckbox}
                      type="checkbox"
                      name={model.ModelName}
                      id={model.ModelName}
                      data-category="model"
                      checked={modelsIds.includes(model.ID)}
                      onChange={handleChangeModel}
                    />
                    <span
                      className={styles.fakeCheckbox}
                      data-for={model}
                    ></span>
                  </label>
                  <span className={styles.info}>{model.ModelName}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <div className={styles.filter}>
          <span className={styles.title}>Body Type</span>
          <div className={styles.items}>
            {Object.entries(BODY_TYPES).map(([key, value]) => (
              <div className={styles.item} key={key}>
                <label htmlFor={key} className={styles.label}>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name={key}
                    id={key}
                    data-category="bodyType"
                    checked={currentBodyTypes.includes(key)}
                    onChange={handleChangeBodyType}
                  />
                  <span className={styles.fakeCheckbox} data-for={key}></span>
                </label>
                <span className={styles.info}>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Mileage</span>
          <div>
            <div className={styles.mileage} onClick={handleSelectMileageFrom}>
              <span className={styles.mileageTitle}>From</span>
              <span className={styles.mileageCurrent}>
                {
                  mileages.find((mileage) => mileage.value === mileageFrom)
                    ?.label
                }
              </span>
              {isDropdownFromVisible && (
                <div className={styles.mileageDropdown}>
                  {mileages.map((mileage) => (
                    <span
                      key={mileage.value}
                      className={styles.mileageDropdownItem}
                      onClick={() => handleSelectMileageItemFrom(mileage.value)}
                    >
                      {mileage.label}
                    </span>
                  ))}
                </div>
              )}
              {mileageFrom ? (
                <span
                  className={styles.mileageCross}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectMileageItemFrom("");
                  }}
                >
                  <span className={styles.mileageCrossItem}></span>
                  <span className={styles.mileageCrossItem}></span>
                </span>
              ) : (
                <span className={styles.mileageArrow}></span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <div>
            <div className={styles.mileage} onClick={handleSelectMileageTo}>
              <span className={styles.mileageTitle}>To</span>
              <span className={styles.mileageCurrent}>
                {mileages.find((mileage) => mileage.value === mileageTo)?.label}
              </span>
              {isDropdownToVisible && (
                <div className={styles.mileageDropdown}>
                  {mileages.map((mileage) => (
                    <span
                      key={mileage.value}
                      className={styles.mileageDropdownItem}
                      onClick={() => handleSelectMileageItemTo(mileage.value)}
                    >
                      {mileage.label}
                    </span>
                  ))}
                </div>
              )}
              {mileageTo ? (
                <span
                  className={styles.mileageCross}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectMileageItemTo("");
                  }}
                >
                  <span className={styles.mileageCrossItem}></span>
                  <span className={styles.mileageCrossItem}></span>
                </span>
              ) : (
                <span className={styles.mileageArrow}></span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Fuel Type</span>
          <div className={styles.items}>
            {fuelTypes.map((fuelType) => (
              <div className={styles.item} key={fuelType.value}>
                <label htmlFor={fuelType.value} className={styles.label}>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name={fuelType.value}
                    id={fuelType.value}
                    data-category="fuelType"
                    checked={currentFuelTypes.includes(fuelType.value)}
                    onChange={handleChangeFuelType}
                  />
                  <span
                    className={styles.fakeCheckbox}
                    data-for={fuelType.value}
                  ></span>
                </label>
                <span className={styles.info}>{fuelType.label}</span>
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
