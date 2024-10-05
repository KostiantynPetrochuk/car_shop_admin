"use client";
import React from "react";
import { Car } from "@/components/client";
import { Car as CarType } from "@/types";

import styles from "./Related.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

const Related = ({ cars }: { cars: CarType[] }) => {
  const slidesPerView = cars.length < 3 ? cars.length : 3;

  return (
    <section className={styles.related}>
      <div className="container">
        <div className="related-inner">
          <h3 className={styles.title}>Related Cars</h3>
          <ul className={styles.list}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              spaceBetween={50}
              slidesPerView={slidesPerView}
              breakpoints={{
                1024: {
                  slidesPerView: slidesPerView,
                },
                768: {
                  slidesPerView: slidesPerView > 1 ? 2 : 1,
                },
                480: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {cars.map((car) => (
                <SwiperSlide key={car.ID}>
                  <Car car={car} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Related;
