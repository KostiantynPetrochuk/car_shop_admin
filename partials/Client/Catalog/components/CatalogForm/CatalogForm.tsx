"use client";
import React, { useState, useRef, useEffect } from "react";

import {
  CONDITION,
  BODY_TYPES,
  FUEL_TYPES,
  TRANSMISSION,
  DRIVE_TYPE,
} from "@/constants";
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

const prices = [
  { value: "", label: "All" },
  { value: "1000", label: "1 000" },
  { value: "2000", label: "2 000" },
  { value: "3000", label: "3 000" },
  { value: "4000", label: "4 000" },
  { value: "5000", label: "5 000" },
  { value: "6000", label: "6 000" },
  { value: "7000", label: "7 000" },
  { value: "8000", label: "8 000" },
  { value: "9000", label: "9 000" },
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
  transmission: string[];
  setTransmission: React.Dispatch<React.SetStateAction<string[]>>;
  driveType: string[];
  setDriveType: React.Dispatch<React.SetStateAction<string[]>>;
  priceFrom: string;
  setPriceFrom: React.Dispatch<React.SetStateAction<string>>;
  priceTo: string;
  setPriceTo: React.Dispatch<React.SetStateAction<string>>;
  isFormVisible: boolean;
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
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
  transmission,
  setTransmission,
  driveType,
  setDriveType,
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  isFormVisible,
  setFormVisible,
}: ConditionFormProps) => {
  const [isDropdownFromVisible, setIsDropdownFromVisible] = useState(false);
  const [isDropdownToVisible, setIsDropdownToVisible] = useState(false);
  const [isDropdownPriceFromVisible, setIsDropdownPriceFromVisible] =
    useState(false);
  const [isDropdownPriceToVisible, setIsDropdownPriceToVisible] =
    useState(false);

  const mileageFromRef = useRef<HTMLDivElement>(null);
  const mileageToRef = useRef<HTMLDivElement>(null);
  const priceFromRef = useRef<HTMLDivElement>(null);
  const priceToRef = useRef<HTMLDivElement>(null);

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
    const currentBrandName = checked ? name : null;
    if (!currentBrandName) {
      setCurrentBrand(null);
      return;
    }
    const currentBrand = brands.find(
      (brand) => brand.BrandName === currentBrandName
    );
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

  const handleChangeTransmission = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setTransmission((prev) => {
      if (checked) {
        return [...prev, name];
      }
      return prev.filter((item) => item !== name);
    });
  };

  const handleChangeDriveType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setDriveType((prev) => {
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

  //
  const handleSelectPriceFrom = () => {
    setIsDropdownPriceFromVisible((prev) => !prev);
    setIsDropdownPriceToVisible(false);
  };
  const handleSelectPriceTo = () => {
    setIsDropdownPriceToVisible((prev) => !prev);
    setIsDropdownPriceFromVisible(false);
  };

  const handleSelectPriceItemFrom = (mileage: string) => {
    setPriceFrom(mileage);
  };

  const handleSelectPriceItemTo = (mileage: string) => {
    setPriceTo(mileage);
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

  const handleCloseForm = () => {
    setFormVisible(false);
    const body = document.querySelector("body");
    if (!body) return;
    body.classList.remove("freezed");
  };

  const clearFilters = () => {
    setCondition([]);
    setCurrentBrand(null);
    setCurrentModels([]);
    setCurrentBodyTypes([]);
    setMileageFrom("");
    setMileageTo("");
    setCurrentFuelTypes([]);
    setTransmission([]);
    setDriveType([]);
    setPriceFrom("");
    setPriceTo("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mileageFromRef.current &&
        !mileageFromRef.current.contains(event.target as Node)
      ) {
        setIsDropdownFromVisible(false);
      }

      if (
        mileageToRef.current &&
        !mileageToRef.current.contains(event.target as Node)
      ) {
        setIsDropdownToVisible(false);
      }

      if (
        priceFromRef.current &&
        !priceFromRef.current.contains(event.target as Node)
      ) {
        setIsDropdownPriceFromVisible(false);
      }

      if (
        priceToRef.current &&
        !priceToRef.current.contains(event.target as Node)
      ) {
        setIsDropdownPriceToVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mileageFromRef, mileageToRef, priceFromRef, priceToRef]);

  const selectedBrand = brands.find(
    (brand) => brand.BrandName === currentBrand
  );

  const modelsIds =
    selectedBrand?.Models?.filter((model: Model) => {
      return currentModels.includes(model.ModelName);
    }).map((model) => model.ID) || [];

  return (
    <form
      className={`${styles.form} ${isFormVisible ? styles.show : ""}`}
      action="/catalog"
      method="GET"
    >
      <div className={styles.mobTitle}>
        <span>Filters</span>
        <button
          className={styles.mobCross}
          type="button"
          onClick={() => {
            setFormVisible(false);
            const body = document.querySelector("body");
            if (!body) return;
            body.classList.remove("freezed");
          }}
        >
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
              <div className={styles.item} key={brand.BrandName}>
                <label htmlFor={brand.BrandName} className={styles.label}>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name={brand.BrandName}
                    id={brand.BrandName}
                    data-category="brand"
                    checked={currentBrand === brand.BrandName}
                    onChange={handleChangeBrand}
                  />
                  <span
                    className={styles.fakeCheckbox}
                    data-for={brand.BrandName}
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
                <div className={styles.item} key={model.ModelName}>
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
                      data-for={model.ModelName}
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
            {Object.keys(BODY_TYPES).map((bodyKey) => (
              <div className={styles.item} key={bodyKey}>
                <label htmlFor={bodyKey} className={styles.label}>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name={bodyKey}
                    id={bodyKey}
                    data-category="bodyType"
                    checked={currentBodyTypes.includes(bodyKey)}
                    onChange={handleChangeBodyType}
                  />
                  <span
                    className={styles.fakeCheckbox}
                    data-for={bodyKey}
                  ></span>
                </label>
                <span className={styles.info}>{bodyKey}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Mileage</span>
          <div ref={mileageFromRef}>
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
          <div ref={mileageToRef}>
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
            {Object.keys(FUEL_TYPES).map((fuelKey) => (
              <div className={styles.item} key={fuelKey}>
                <label htmlFor={fuelKey} className={styles.label}>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name={fuelKey}
                    id={fuelKey}
                    data-category="fuelType"
                    checked={currentFuelTypes.includes(fuelKey)}
                    onChange={handleChangeFuelType}
                  />
                  <span
                    className={styles.fakeCheckbox}
                    data-for={fuelKey}
                  ></span>
                </label>
                <span className={styles.info}>{fuelKey}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Transmission</span>
          <div className={styles.items}>
            {Object.keys(TRANSMISSION).map((transmissionType) => (
              <div className={styles.item} key={transmissionType}>
                <label htmlFor={transmissionType} className={styles.label}>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name={transmissionType}
                    id={transmissionType}
                    data-category="transmission"
                    checked={transmission.includes(transmissionType)}
                    onChange={handleChangeTransmission}
                  />
                  <span
                    className={styles.fakeCheckbox}
                    data-for={transmissionType}
                  ></span>
                </label>
                <span className={styles.info}>{transmissionType}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Drive Type</span>
          <div className={styles.items}>
            {Object.keys(DRIVE_TYPE).map((driveTypeItem) => (
              <div className={styles.item} key={driveTypeItem}>
                <label htmlFor={driveTypeItem} className={styles.label}>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name={driveTypeItem}
                    id={driveTypeItem}
                    data-category="driveType"
                    checked={driveType.includes(driveTypeItem)}
                    onChange={handleChangeDriveType}
                  />
                  <span
                    className={styles.fakeCheckbox}
                    data-for={driveTypeItem}
                  ></span>
                </label>
                <span className={styles.info}>{driveTypeItem}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.title}>Price</span>
          <div ref={priceFromRef}>
            <div className={styles.mileage} onClick={handleSelectPriceFrom}>
              <span className={styles.priceTitle}>From</span>
              <span className={styles.priceCurrent}>
                {prices.find((price) => price.value === priceFrom)?.label}
              </span>
              {isDropdownPriceFromVisible && (
                <div className={styles.priceDropdown}>
                  {prices.map((price) => (
                    <span
                      key={price.value}
                      className={styles.priceDropdownItem}
                      onClick={() => handleSelectPriceItemFrom(price.value)}
                    >
                      {price.label}
                    </span>
                  ))}
                </div>
              )}
              {priceFrom ? (
                <span
                  className={styles.priceCross}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectPriceItemFrom("");
                  }}
                >
                  <span className={styles.priceCrossItem}></span>
                  <span className={styles.priceCrossItem}></span>
                </span>
              ) : (
                <span className={styles.priceArrow}></span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <div ref={priceToRef}>
            <div className={styles.price} onClick={handleSelectPriceTo}>
              <span className={styles.priceTitle}>To</span>
              <span className={styles.priceCurrent}>
                {prices.find((price) => price.value === priceTo)?.label}
              </span>
              {isDropdownPriceToVisible && (
                <div className={styles.priceDropdown}>
                  {prices.map((price) => (
                    <span
                      key={price.value}
                      className={styles.priceDropdownItem}
                      onClick={() => handleSelectPriceItemTo(price.value)}
                    >
                      {price.label}
                    </span>
                  ))}
                </div>
              )}
              {priceTo ? (
                <span
                  className={styles.priceCross}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectPriceItemTo("");
                  }}
                >
                  <span className={styles.priceCrossItem}></span>
                  <span className={styles.priceCrossItem}></span>
                </span>
              ) : (
                <span className={styles.priceArrow}></span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.submitInner}>
        <input
          type="button"
          className={styles.clear}
          value="Clear Filters"
          onClick={clearFilters}
        />
        <input
          type="button"
          className={styles.submit}
          value="Show Results"
          onClick={handleCloseForm}
        />
      </div>
    </form>
  );
};

export default CatalogForm;
