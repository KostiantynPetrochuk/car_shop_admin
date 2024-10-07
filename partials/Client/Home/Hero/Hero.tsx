"use client";
import React, { useEffect, useState } from "react";
import { Brand } from "@/types";
import { CONDITION } from "@/constants";

import styles from "./Hero.module.css";
import Link from "next/link";

type HeroProps = {
  brands: Brand[];
};

const Hero = ({ brands }: HeroProps) => {
  const [openSelect, setOpenSelect] = useState<string | null>(null);

  const [condition, setCondition] = useState<string>("");
  const [currentBrand, setCurrentBrand] = useState<string>("all_makes");
  const [currentModel, setCurrentModel] = useState<string>("all_models");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const [searchParams, setSearchParams] = useState("");

  const handleSelectToggle = (selectName: string) => {
    setOpenSelect((prev) => (prev === selectName ? null : selectName));
  };

  const handleConditionClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.dataset.value) {
      setCondition(target.dataset.value || "all_cars");
    }
    if (target.dataset.value === "all_cars" && openSelect === "condition") {
      setCurrentModel("all_models");
    }
    handleSelectToggle("condition");
  };

  const handleMakeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.dataset.value) {
      setCurrentBrand(target.dataset.value || "all_makes");
    }
    if (
      (target.dataset.value === "all_makes" && openSelect === "make") ||
      (target.dataset.value !== currentBrand && openSelect === "make")
    ) {
      setCurrentModel("all_models");
    }
    handleSelectToggle("make");
  };

  const handleModelClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.dataset.value) {
      setCurrentModel(target.dataset.value || "all_models");
    }
    handleSelectToggle("model");
  };

  const handlePriceClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.dataset.value) {
      const [from, to] = target.dataset.value.split("_");
      setPriceFrom(from);
      setPriceTo(to);
    }
    handleSelectToggle("price");
  };

  const currentBrandModels = brands.find(
    (brand) => brand.BrandName === currentBrand
  )?.Models;
  let priceLabel = priceFrom ? `${priceFrom} $ - ${priceTo} $` : "All Prices";

  useEffect(() => {
    const searchParamsArr = [];
    if (condition) {
      searchParamsArr.push(`condition=${condition}`);
    }
    if (currentBrand && currentBrand !== "all_makes") {
      searchParamsArr.push(`brand=${currentBrand}`);
    }
    if (currentModel && currentModel !== "all_models") {
      searchParamsArr.push(`model=${currentModel}`);
    }
    if (priceFrom) {
      searchParamsArr.push(`priceFrom=${priceFrom}`);
    }
    if (priceTo) {
      searchParamsArr.push(`priceTo=${priceTo}`);
    }
    setSearchParams(searchParamsArr.join("&"));
  }, [condition, currentBrand, currentModel, priceFrom, priceTo]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.filter}`)) {
        setOpenSelect(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div>
          <div className={styles.info}>
            Find cars for sale and for rent near you
          </div>
          <h1 className={styles.title}>Find You Dream Car</h1>

          <form className={styles.filters} action="/catalog" method="GET">
            <div className={styles.filter} onClick={handleConditionClick}>
              <div className={styles.value}>
                {condition === "" ? "All Cars" : condition}
              </div>
              {openSelect === "condition" && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownItem} data-value="">
                    All Cars
                  </div>
                  {Object.entries(CONDITION).map(([key, value]) => (
                    <div
                      key={key}
                      className={styles.dropdownItem}
                      data-value={key}
                    >
                      {value.label.en}
                    </div>
                  ))}
                </div>
              )}
              <input type="hidden" name="carCondition" value={condition} />
            </div>

            <div className={styles.filter} onClick={handleMakeClick}>
              <div className={styles.value}>
                {currentBrand === "all_makes" ? "All Makes" : currentBrand}
              </div>
              {openSelect === "make" && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownItem} data-value="all_makes">
                    All Makes
                  </div>
                  {brands.map((brand) => (
                    <div
                      key={brand.ID}
                      className={styles.dropdownItem}
                      data-value={brand.BrandName}
                    >
                      {brand.BrandName}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.filter} onClick={handleModelClick}>
              <div className={styles.value}>
                {currentModel === "all_models" ? "All Models" : currentModel}
              </div>
              {openSelect === "model" && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownItem} data-value="all_models">
                    All Models
                  </div>
                  {currentBrandModels?.map((model) => (
                    <div
                      key={model.ID}
                      className={styles.dropdownItem}
                      data-value={model.ModelName}
                    >
                      {model.ModelName}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.filter} onClick={handlePriceClick}>
              <div className={styles.value}>{priceLabel}</div>
              {openSelect === "price" && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownItem} data-value="">
                    All Prices
                  </div>
                  <div className={styles.dropdownItem} data-value="1000_2000">
                    1 000 $ - 2 000 $
                  </div>
                  <div className={styles.dropdownItem} data-value="2000_3000">
                    2 000 $ - 3 000 $
                  </div>
                  <div className={styles.dropdownItem} data-value="3000_4000">
                    3 000 $ - 4 000 $
                  </div>
                  <div className={styles.dropdownItem} data-value="4000_5000">
                    4 000 $ - 5 000 $
                  </div>
                  <div className={styles.dropdownItem} data-value="5000_10000">
                    5 000 $ - 10 000 $
                  </div>
                  <div className={styles.dropdownItem} data-value="10000_20000">
                    10 000 $ - 20 000 $
                  </div>
                </div>
              )}
            </div>

            <Link href={`/catalog?${searchParams}`} className={styles.button}>
              <img src="/img/search.svg" alt="search" />
            </Link>
          </form>
        </div>
        <div className={styles.bot}>
          <img className={styles.botImg} src="/img/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
