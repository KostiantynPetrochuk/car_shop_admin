"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import styles from "./Hero.module.css";

const Hero = () => {
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
                <span>2021</span>
              </div>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_speed.svg"
                  alt="speed_badge"
                />
                <span>250 000 km</span>
              </div>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_transmission.svg"
                  alt=""
                />
                <span>Manual</span>
              </div>
              <div className={styles.badge}>
                <img
                  className={styles.badgeLogo}
                  src="/img/badge_fuel.svg"
                  alt=""
                />
                <span>Petrol</span>
              </div>
            </div>
            {/* slider */}
            <div style={{ maxWidth: "500px" }}>
              <Swiper
                style={{
                  maxHeight: "300px",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img
                    style={{
                      // objectFit: "scale-down",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    src="/img/test_car.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                style={{
                  maxHeight: "200px",
                }}
              >
                <SwiperSlide>
                  <img
                    style={{
                      // objectFit: "scale-down",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    src="/img/test_car.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className={styles.right}>
            <span>Price</span>
            <span className={styles.price}>$165 000</span>
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
