"use client";
import React from "react";

import { Car } from "@/components/client";
import styles from "./FeaturedCars.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Car as CarType } from "@/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";
import Link from "next/link";

const FeaturedCars = ({
  intact,
  damaged,
}: {
  intact: CarType[];
  damaged: CarType[];
}) => {
  const [intactCars, setIntactCars] = React.useState<CarType[]>(intact);
  const [damagedCars, setDamagedCars] = React.useState<CarType[]>(damaged);
  const [selectedTab, setSelectedTab] = React.useState("intact");
  const [carsToDisplay, setCarsToDisplay] =
    React.useState<CarType[]>(intactCars);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    if (tab === "intact") {
      setCarsToDisplay(intactCars);
    } else {
      setCarsToDisplay(damagedCars);
    }
  };

  return (
    <section className={styles.featured}>
      <div className="container">
        <div className="featured-inner">
          <div className={styles.top}>
            <h3 className={styles.title}>Featured Cars</h3>
            <Link
              href={`/catalog?condition=${selectedTab}`}
              className="featured-link"
            >
              <span className={styles.text}>View All</span>
              <img
                className={styles.arrow}
                src="/img/link_arrow.svg"
                alt="arrow-link"
              />
            </Link>
          </div>
          <div className={styles.tabs}>
            <span
              className={`${styles.item} ${
                selectedTab === "intact" ? styles.selected : ""
              }`}
              onClick={() => handleTabClick("intact")}
            >
              Intact Cars
            </span>
            <span
              className={`${styles.item} ${
                selectedTab === "damaged" ? styles.selected : ""
              }`}
              onClick={() => handleTabClick("damaged")}
            >
              Damaged Cars
            </span>
          </div>
          <div>
            <ul className="cars-list">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  // >= 1024px
                  1024: {
                    slidesPerView: 3,
                  },
                  // >= 768px
                  768: {
                    slidesPerView: 2,
                  },
                  // >= 480px
                  480: {
                    slidesPerView: 1,
                  },
                  // < 480px
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                {carsToDisplay?.map((car, index) => (
                  <SwiperSlide key={index}>
                    <Car background="lightBlue" car={car} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
