"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Car } from "@/components/client";
import {
  CatalogForm,
  CatalogPagination,
  CatalogFormBg,
} from "@/partials/Client/Catalog/components";
import { Brand, Car as CarType } from "@/types";
import styles from "./CatalogBody.module.css";

const CatalogBody = ({
  brands,
  carsData,
}: {
  brands: Brand[];
  carsData: { cars: CarType[]; total: number };
}) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [condition, setCondition] = useState<string[]>([]);
  const [currentBrand, setCurrentBrand] = useState<string | null>(null);
  const [currentModels, setCurrentModels] = useState<string[]>([]);

  const handleSearch = () => {
    updateSearchParams(condition, currentBrand, currentModels, page);
  };

  const updateSearchParams = (
    condition: string[],
    currentBrand: string | null,
    currentModels: string[],
    page: number
  ) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (condition) {
      const conditionArray = condition;
      if (conditionArray.length > 1) {
        searchParams.set("condition", conditionArray.join(","));
      }
      if (conditionArray.length === 1) {
        searchParams.set("condition", conditionArray[0]);
      }
      if (conditionArray.length === 0) {
        searchParams.delete("condition");
      }
    } else {
      searchParams.delete("condition");
    }
    //
    if (page) {
      searchParams.set("page", page.toString());
    } else {
      searchParams.delete("page");
    }
    //
    if (currentBrand) {
      searchParams.set("brand", currentBrand);
    } else {
      searchParams.delete("brand");
    }
    //
    if (currentModels) {
      const currentModelsArray = currentModels;
      if (currentModelsArray.length > 1) {
        searchParams.set("model", currentModelsArray.join(","));
      }
      if (currentModelsArray.length === 1) {
        searchParams.set("model", currentModelsArray[0]);
      }
      if (currentModelsArray.length === 0) {
        searchParams.delete("model");
      }
    } else {
      searchParams.delete("model");
    }
    //
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  useEffect(() => {
    if (page === 1) {
      handleSearch();
    } else {
      setPage(1);
    }
  }, [currentModels, currentBrand, condition]);

  useEffect(() => {
    handleSearch();
  }, [page]);

  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles.inner}>
          <CatalogFormBg />
          <CatalogForm
            condition={condition}
            setCondition={setCondition}
            brands={brands}
            currentBrand={currentBrand}
            setCurrentBrand={setCurrentBrand}
            currentModels={currentModels}
            setCurrentModels={setCurrentModels}
          />
          <ul className={styles.carsList}>
            {carsData?.cars?.map((car) => (
              <Car key={car.ID} car={car} />
            ))}
          </ul>
        </div>
        <CatalogPagination
          totalPages={Math.ceil(carsData.total / 5)}
          page={page}
          setPage={setPage}
        />
      </div>
    </section>
  );
};

export default CatalogBody;
