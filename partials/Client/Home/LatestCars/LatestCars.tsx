"use client";
import { SetStateAction, useState, Dispatch } from "react";
import { useTranslations } from "next-intl";
import { Car } from "@/components/client";

import styles from "./LatestCars.module.css";
import { Car as CarType } from "@/types";

const loadCars = async (
  offset: number,
  setCars: Dispatch<SetStateAction<CarType[]>>,
  setIsButtonDisabled: Dispatch<SetStateAction<boolean>>
) => {
  const res = await fetch(
    `http://localhost:3001/cars?offset=${offset}&limit=5`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const data = await res.json();
  if (!data?.cars) {
    setIsButtonDisabled(true);
    return;
  }

  setCars((prev) => [...prev, ...data.cars]);

  console.log(data.cars);
};

const LatestCars = ({ initCars }: { initCars: CarType[] }) => {
  const t = useTranslations("Home");
  const [cars, setCars] = useState<CarType[]>(initCars);
  const [skip, setSkip] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  return (
    <section className={styles.cars}>
      <div className="container">
        <div className="cars-inner">
          <h3 className={styles.title}>{t("latestCars")}</h3>
          <ul className={styles.list}>
            {cars?.map((car) => (
              <Car key={car.ID} car={car} />
            ))}
          </ul>
          <div className={styles.buttonInner}>
            {!isButtonDisabled ? (
              <button
                className={styles.button}
                onClick={() => {
                  setSkip(skip + 1);
                  loadCars(skip * 5, setCars, setIsButtonDisabled);
                }}
              >
                {t("showMore")}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCars;
