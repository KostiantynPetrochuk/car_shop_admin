"use client";
import React from "react";

import { Car } from "@/components/client";
import styles from "./FeaturedCars.module.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

const FeaturedCars = () => {
  return (
    <section className={styles.featured}>
      <div className="container">
        <div className="featured-inner">
          <div className={styles.top}>
            <h3 className={styles.title}>Featured Cars</h3>
            <a href="#" className="featured-link">
              <span className={styles.text}>View All</span>
              <img
                className={styles.arrow}
                src="/img/link_arrow.svg"
                alt="arrow-link"
              />
            </a>
          </div>
          <div className={styles.tabs}>
            <span className={styles.item}>Intact Cars</span>
            <span className={`${styles.item} ${styles.selected}`}>
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
                <SwiperSlide>
                  <Car background="lightBlue" />
                </SwiperSlide>
                <SwiperSlide>
                  <Car background="lightBlue" />
                </SwiperSlide>
                <SwiperSlide>
                  <Car background="lightBlue" />
                </SwiperSlide>
                <SwiperSlide>
                  <Car background="lightBlue" />
                </SwiperSlide>
                <SwiperSlide>
                  <Car background="lightBlue" />
                </SwiperSlide>
                <SwiperSlide>
                  <Car background="lightBlue" />
                </SwiperSlide>
              </Swiper>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
