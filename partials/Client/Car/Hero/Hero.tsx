"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import styles from "./Hero.module.css";
import { Car } from "@/types";

const Hero = ({ car }: { car: Car }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="hero">
      <div className="container">
        <div className={styles.inner}>
          <div className="hero-left">
            <div className={styles.badges}>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_calendar.svg"
                  alt="calendar_badge"
                />
                <span>{car.Year}</span>
              </div>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_speed.svg"
                  alt="speed_badge"
                />
                <span>
                  {new Intl.NumberFormat("uk-UA").format(car?.Mileage)} km
                </span>
              </div>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_transmission.svg"
                  alt=""
                />
                <span>
                  {car?.Transmission.charAt(0).toUpperCase() +
                    car?.Transmission.slice(1)}
                </span>
              </div>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_fuel.svg"
                  alt=""
                />
                <span>
                  {car?.FuelType.charAt(0).toUpperCase() +
                    car?.FuelType.slice(1)}
                </span>
              </div>
            </div>
            {/* slider */}
            <div>
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                style={{
                  aspectRatio: "16/9",
                  maxWidth: "100%",
                }}
              >
                {car?.ImageNames?.map((image) => (
                  <SwiperSlide key={image}>
                    <img
                      src={`http://localhost:3001/uploads/cars/${image}`}
                      alt={`${image} logo`}
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                style={{
                  marginTop: 10,
                  maxWidth: "100%",
                  maxHeight: "300px",
                }}
              >
                {car?.ImageNames?.map((image) => (
                  <SwiperSlide key={image}>
                    <Image
                      src={`http://localhost:3001/uploads/cars/${image}`}
                      alt={`${image} logo`}
                      width={300}
                      height={300}
                      priority={true}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      quality={100}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className={styles.right}>
            <span>Price</span>
            <span className={styles.price}>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(car?.Price)}
            </span>
            <a className={styles.link} href="#">
              <img
                className={styles.linkLogo}
                src="/img/badge_link.svg"
                alt=""
              />
              <span>Place an Order</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
