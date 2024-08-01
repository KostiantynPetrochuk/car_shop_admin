import React from "react";

import { Car } from "@/components/client";

import "./FeaturedCars.css";

const FeaturedCars = () => {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured-inner">
          <div className="featured-top">
            <h3 className="featured-title">Featured Cars</h3>
            <a href="#" className="featured-link">
              <span className="featured-link-text">View All</span>
              <img
                className="featured-link-arrow"
                src="/img/link_arrow.svg"
                alt="arrow-link"
              />
            </a>
          </div>
          <div className="featured-tabs">
            <span className="featured-tabs-item">Whole Cars</span>
            <span className="featured-tabs-item selected">Damaged Cars</span>
          </div>
          <div className="swiper">
            <ul className="cars-list swiper-wrapper">
              <Car background="light-blue" />
              <Car background="light-blue" />
            </ul>
            <div className="featured-pagination swiper-pagination"></div>
            <div className="featured-arrow-prev swiper-button-prev"></div>
            <div className="featured-arrow-next swiper-button-next"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
