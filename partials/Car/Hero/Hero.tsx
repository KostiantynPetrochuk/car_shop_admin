import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-left-badges">
              <div className="hero-left-badge">
                <img
                  className="hero-left-badge-logo"
                  src="/img/badge_calendar.svg"
                  alt="calendar_badge"
                />
                <span className="hero-left-badge-label">2021</span>
              </div>
              <div className="hero-left-badge">
                <img
                  className="hero-left-badge-logo"
                  src="/img/badge_speed.svg"
                  alt="speed_badge"
                />
                <span className="hero-left-badge-label">250 000 km</span>
              </div>
              <div className="hero-left-badge">
                <img
                  className="hero-left-badge-logo"
                  src="/img/badge_transmission.svg"
                  alt=""
                />
                <span className="hero-left-badge-label">Manual</span>
              </div>
              <div className="hero-left-badge">
                <img
                  className="hero-left-badge-logo"
                  src="/img/badge_fuel.svg"
                  alt=""
                />
                <span className="hero-left-badge-label">Petrol</span>
              </div>
            </div>
            <div className="swiper-container hero-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/img/test_car.jpg" alt="Car Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <span className="hero-right-info">Price</span>
            <span className="hero-right-price">$165 000</span>
            <a className="hero-right-link" href="#">
              <img
                className="hero-right-link-logo"
                src="/img/badge_link.svg"
                alt=""
              />
              <span className="hero-right-link-label">Place an Order</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
