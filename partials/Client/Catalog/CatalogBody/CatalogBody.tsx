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
import SortForm from "../SortForm";
import Image from "next/image";

type CurrentFilters = {
  condition: string;
  brand: string;
  model: string;
  bodyType: string;
  mileageFrom: string;
  mileageTo: string;
  fuelType: string;
  transmission: string;
  driveType: string;
  priceFrom: string;
  priceTo: string;
};

const CatalogBody = ({
  brands,
  carsData,
  currentFilters,
}: {
  brands: Brand[];
  carsData: { cars: CarType[]; total: number };
  currentFilters: CurrentFilters;
}) => {
  const initCondition = currentFilters?.condition
    ? currentFilters?.condition.split(",")
    : [];
  const initBrand = currentFilters?.brand ? currentFilters?.brand : null;
  const initModels = currentFilters?.model
    ? currentFilters?.model.split(",")
    : [];
  const initBodyTypes = currentFilters?.bodyType
    ? currentFilters?.bodyType.split(",")
    : [];
  const initFuelTypes = currentFilters?.fuelType
    ? currentFilters?.fuelType.split(",")
    : [];
  const initTransmission = currentFilters?.transmission
    ? currentFilters?.transmission.split(",")
    : [];
  const initDriveType = currentFilters?.driveType
    ? currentFilters?.driveType.split(",")
    : [];
  const initPriceFrom = currentFilters?.priceFrom
    ? currentFilters?.priceFrom
    : "";
  const initPriceTo = currentFilters?.priceTo ? currentFilters?.priceTo : "";
  const initMileageFrom = currentFilters?.mileageFrom
    ? currentFilters?.mileageFrom
    : "";
  const initMileageTo = currentFilters?.mileageTo
    ? currentFilters?.mileageTo
    : "";

  const router = useRouter();
  const [isFormVisible, setFormVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [condition, setCondition] = useState<string[]>(initCondition);
  const [currentBrand, setCurrentBrand] = useState<string | null>(initBrand);
  const [currentModels, setCurrentModels] = useState<string[]>(initModels);
  const [currentBodyTypes, setCurrentBodyTypes] =
    useState<string[]>(initBodyTypes);
  const [mileageFrom, setMileageFrom] = useState(initMileageFrom);
  const [mileageTo, setMileageTo] = useState(initMileageTo);
  const [currentFuelTypes, setCurrentFuelTypes] =
    useState<string[]>(initFuelTypes);
  const [transmission, setTransmission] = useState<string[]>(initTransmission);
  const [driveType, setDriveType] = useState<string[]>(initDriveType);
  const [priceFrom, setPriceFrom] = useState(initPriceFrom);
  const [priceTo, setPriceTo] = useState(initPriceTo);
  const start = (page - 1) * 5 + 1;
  const end = Math.min(page * 5, carsData?.total);

  const handleSearch = () => {
    updateSearchParams(
      condition,
      currentBrand,
      currentModels,
      currentBodyTypes,
      currentFuelTypes,
      transmission,
      driveType,
      page
    );
  };

  const updateSearchParams = (
    condition: string[],
    currentBrand: string | null,
    currentModels: string[],
    currentBodyTypes: string[],
    currentFuelTypes: string[],
    transmission: string[],
    driveType: string[],
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
    if (currentBodyTypes) {
      const currentBodyTypesArray = currentBodyTypes;
      if (currentBodyTypesArray.length > 1) {
        searchParams.set("bodyType", currentBodyTypesArray.join(","));
      }
      if (currentBodyTypesArray.length === 1) {
        searchParams.set("bodyType", currentBodyTypesArray[0]);
      }
      if (currentBodyTypesArray.length === 0) {
        searchParams.delete("bodyType");
      }
    }
    //
    if (mileageFrom) {
      searchParams.set("mileageFrom", mileageFrom);
    } else {
      searchParams.delete("mileageFrom");
    }
    if (mileageTo) {
      searchParams.set("mileageTo", mileageTo);
    } else {
      searchParams.delete("mileageTo");
    }
    //
    if (currentFuelTypes) {
      const currentFuelTypesArray = currentFuelTypes;
      if (currentFuelTypesArray.length > 1) {
        searchParams.set("fuelType", currentFuelTypesArray.join(","));
      }
      if (currentFuelTypesArray.length === 1) {
        searchParams.set("fuelType", currentFuelTypesArray[0]);
      }
      if (currentFuelTypesArray.length === 0) {
        searchParams.delete("fuelType");
      }
    }
    //
    if (transmission) {
      const transmissionArray = transmission;
      if (transmissionArray.length > 1) {
        searchParams.set("transmission", transmissionArray.join(","));
      }
      if (transmissionArray.length === 1) {
        searchParams.set("transmission", transmissionArray[0]);
      }
      if (transmissionArray.length === 0) {
        searchParams.delete("transmission");
      }
    }
    //
    if (driveType) {
      const driveTypeArray = driveType;
      if (driveTypeArray.length > 1) {
        searchParams.set("driveType", driveTypeArray.join(","));
      }
      if (driveTypeArray.length === 1) {
        searchParams.set("driveType", driveTypeArray[0]);
      }
      if (driveTypeArray.length === 0) {
        searchParams.delete("driveType");
      }
    }
    //
    if (priceFrom) {
      searchParams.set("priceFrom", priceFrom);
    } else {
      searchParams.delete("priceFrom");
    }
    if (priceTo) {
      searchParams.set("priceTo", priceTo);
    } else {
      searchParams.delete("priceTo");
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
  }, [
    currentModels,
    currentBrand,
    condition,
    currentBodyTypes,
    mileageFrom,
    mileageTo,
    currentFuelTypes,
    transmission,
    driveType,
    priceFrom,
    priceTo,
  ]);

  useEffect(() => {
    handleSearch();
  }, [page]);

  return (
    <section className={styles.catalog}>
      <SortForm
        setFormVisible={setFormVisible}
        start={start}
        end={end}
        total={carsData?.total}
      />
      <div className="container">
        <div className={styles.inner}>
          <CatalogFormBg
            isFormVisible={isFormVisible}
            setFormVisible={setFormVisible}
          />
          <CatalogForm
            condition={condition}
            setCondition={setCondition}
            brands={brands}
            currentBrand={currentBrand}
            setCurrentBrand={setCurrentBrand}
            currentModels={currentModels}
            setCurrentModels={setCurrentModels}
            currentBodyTypes={currentBodyTypes}
            setCurrentBodyTypes={setCurrentBodyTypes}
            mileageFrom={mileageFrom}
            setMileageFrom={setMileageFrom}
            mileageTo={mileageTo}
            setMileageTo={setMileageTo}
            currentFuelTypes={currentFuelTypes}
            setCurrentFuelTypes={setCurrentFuelTypes}
            transmission={transmission}
            setTransmission={setTransmission}
            driveType={driveType}
            setDriveType={setDriveType}
            priceFrom={priceFrom}
            setPriceFrom={setPriceFrom}
            priceTo={priceTo}
            setPriceTo={setPriceTo}
            isFormVisible={isFormVisible}
            setFormVisible={setFormVisible}
          />
          {carsData?.cars?.length ? (
            <div className={styles.carsListInner}>
              <ul className={styles.carsList}>
                {carsData?.cars?.map((car) => (
                  <Car key={car.ID} car={car} />
                ))}
              </ul>
              <CatalogPagination
                totalPages={Math.ceil(carsData.total / 5)}
                page={page}
                setPage={setPage}
              />
            </div>
          ) : (
            <div className={styles.carsNotFound}>
              <Image
                src="/img/not_finded_cars_logo.jpeg"
                alt="find_cars"
                width={300}
                height={300}
              />
              <span className={styles.carsNotFoundInfo}>
                {/* Нажаль, за вашим запитом не знайдено жодного автомобіля. */}
                Unfortunately, no cars were found for your request.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CatalogBody;
