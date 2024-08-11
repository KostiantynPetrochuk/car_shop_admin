"use client";
import React from "react";
import { Car } from "@/components/client";

import styles from "./Related.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

const Related = () => {
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
                <Car />
              </SwiperSlide>
              <SwiperSlide>
                <Car />
              </SwiperSlide>
              <SwiperSlide>
                <Car />
              </SwiperSlide>
              <SwiperSlide>
                <Car />
              </SwiperSlide>
              <SwiperSlide>
                <Car />
              </SwiperSlide>
              <SwiperSlide>
                <Car />
              </SwiperSlide>
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Related;
