import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

import styles from "./Car.module.css";
import { Car as CarType } from "@/types";

type CarProps = {
  background?: string;
  car: CarType;
};

const Car = ({ background, car }: CarProps) => {
  const t = useTranslations("CarCard");
  const isLight = background === "lightBlue";
  const bgColor = isLight ? styles.lightBlue : styles.darkBlue;
  return (
    <li className={styles.item}>
      <div className={`${styles.top} ${bgColor}`}>
        <div>
          <Link href={`/car/${car?.ID}`} className={styles.link}>
            <Image
              src={`http://localhost:3001/uploads/cars/${car?.ImageNames[0]}`}
              alt="car_image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
        </div>

        <div className={styles.category}>{t("greatPrice")}</div>
      </div>
      <div className={`${styles.bot} ${bgColor}`}>
        <Link href={`/car/${car?.ID}`} className={styles.link}>
          <div className={styles.row}>
            <span
              className={styles.title}
            >{`${car?.BrandName} ${car?.ModelName} - ${car?.Year}`}</span>
          </div>
        </Link>
        <div className={styles.row}>
          <div className={styles.col}>
            <img
              className={styles.logo}
              src="/img/speed_logo.svg"
              alt="speed_logo"
            />
            <span className={styles.label}>
              {new Intl.NumberFormat("uk-UA").format(car?.Mileage)} {t("km")}
            </span>
          </div>
          <div className={styles.col}>
            <img
              className={styles.logo}
              src="/img/fuel_logo.svg"
              alt="fuel_logo"
            />
            <span className={styles.label}>{t(car?.FuelType)}</span>
          </div>
          <div className={styles.col}>
            <img
              className={styles.logo}
              src="/img/transmission_logo.svg"
              alt="transmission_logo"
            />
            <span className={styles.label}>{t(car?.Transmission)}</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <span className={styles.price}>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(car?.Price)}
            </span>
          </div>
          <Link href={`/car/${car?.ID}`} className={styles.link}>
            <span>{t("viewDetails")}</span>
            <img
              className={styles.arrow}
              src="/img/link_arrow.svg"
              alt="link arrow"
            />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Car;
