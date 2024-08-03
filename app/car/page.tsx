import React from "react";

import { Header, Footer } from "@/components/client";
import { Top, SortForm, CatalogBody } from "@/partials/Catalog";

import "./page.css";

const Car = () => {
  return (
    <body>
      <Header />
      <main className="main">
        <section className="top">
          <div className="container">
            <div className="top-inner">
              <div className="breadcrumbs">
                <a className="breadcrumbs-link" href="#">
                  Home
                </a>
                <span>/</span>
                <a className="breadcrumbs-link" href="#">
                  Listings
                </a>
                <span>/</span>
                <span className="breadcrumbs-last">Ranger Black – 2021</span>
              </div>
              <h1 className="breadcrumbs-title">Ranger Black – 2021</h1>
            </div>
          </div>
        </section>
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
                    <div className="swiper-slide">
                      <img src="/img/test_car_2.jpg" alt="Car Image" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/img/test_car_3.jpg" alt="Car Image" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/img/test_car.jpg" alt="Car Image" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/img/test_car.jpg" alt="Car Image" />
                    </div>
                  </div>
                  <div className="hero-swiper-pagination swiper-pagination"></div>
                  <div className="hero-swiper-button-prev swiper-button-prev"></div>
                  <div className="hero-swiper-button-next swiper-button-next"></div>
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
        <section className="overview">
          <div className="container">
            <div className="overview-inner">
              <h3 className="overview-title">Car Overview</h3>
              <div className="overview-details">
                <div className="overview-col">
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_body.svg"
                        alt=""
                      />
                      <span className="overview-label">Body</span>
                    </div>
                    <span className="overview-row-value">Sedan</span>
                  </div>
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_mileage.svg"
                        alt=""
                      />
                      <span className="overview-label">Mileage</span>
                    </div>
                    <span className="overview-row-value">250</span>
                  </div>
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_fuel.svg"
                        alt=""
                      />
                      <span className="overview-label">Fuel Type</span>
                    </div>
                    <span className="overview-row-value">Petrol</span>
                  </div>
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_year.svg"
                        alt=""
                      />
                      <span className="overview-label">Year</span>
                    </div>
                    <span className="overview-row-value">2021</span>
                  </div>
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_transmission.svg"
                        alt=""
                      />
                      <span className="overview-label">Transmission</span>
                    </div>
                    <span className="overview-row-value">Manual</span>
                  </div>
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_drive_type.svg"
                        alt=""
                      />
                      <span className="overview-label">Drive Type</span>
                    </div>
                    <span className="overview-row-value">Real-Wheel Drive</span>
                  </div>
                </div>
                <div className="overview-col">
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_condition.svg"
                        alt=""
                      />
                      <span className="overview-label">Condition</span>
                    </div>
                    <span className="overview-row-value">Used</span>
                  </div>
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_engine.svg"
                        alt=""
                      />
                      <span className="overview-label">Engine Size</span>
                    </div>
                    <span className="overview-row-value">4.0</span>
                  </div>
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_door.svg"
                        alt=""
                      />
                      <span className="overview-label">Door</span>
                    </div>
                    <span className="overview-row-value">4 Doors</span>
                  </div>
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_cylinder.svg"
                        alt=""
                      />
                      <span className="overview-label">Cylinder</span>
                    </div>
                    <span className="overview-row-value">12</span>
                  </div>
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_color.svg"
                        alt=""
                      />
                      <span className="overview-label">Color</span>
                    </div>
                    <span className="overview-row-value">Black</span>
                  </div>
                  <div className="overview-row">
                    <div className="overview-row-title">
                      <img
                        className="overview-logo"
                        src="/img/overview_vin.svg"
                        alt=""
                      />
                      <span className="overview-label">VIN</span>
                    </div>
                    <span className="overview-row-value">FCB123792</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="features-inner">
              <h3 className="features-title">Features</h3>
              <div className="features-content">
                <div className="features-col">
                  <span className="features-col-title">Interior</span>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Air Conditioner
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Digital Odometer
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">Heater</span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Leather Seats
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Panoramic Moonroof
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">Tachometer</span>
                  </div>
                </div>
                <div className="features-col">
                  <span className="features-col-title">Safety</span>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Anti-lock Braking
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Brake Assist
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Child Safety Locks
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Driver Air Bag
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Power Door Locks
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">Tachometer</span>
                  </div>
                </div>
                <div className="features-col">
                  <span className="features-col-title">Exterior</span>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Fog Lights Font
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Rain Sensing Wiper
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      {" "}
                      Rear Spoiler{" "}
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Windows - Electric
                    </span>
                  </div>
                </div>
                <div className="features-col">
                  <span className="features-col-title">
                    Comfort & Convenience
                  </span>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      Android Auto
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      {" "}
                      Apple CarPlay{" "}
                    </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">Bluetooth</span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label"> Homelink </span>
                  </div>
                  <div className="features-col-item">
                    <span className="features-col-item-checkbox"></span>
                    <span className="features-col-item-label">
                      {" "}
                      Power Steering{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="related">
          <div className="container">
            <div className="related-inner">
              <h3 className="related-title">Related Cars</h3>

              <div className="related-swiper swiper">
                <ul className="related-cars-list swiper-wrapper">
                  <li className="card-list-item swiper-slide">
                    <div className="card-list-item-top light-blue">
                      <img src="/img/card_item.jpg" alt="" />
                      <div className="card-list-item-top-category">
                        Great Price
                      </div>
                    </div>
                    <div className="card-list-item-bot light-blue">
                      <div className="card-list-item-bot-row">
                        <span className="card-list-item-bot-row-title">
                          Ford Transit - 2021
                        </span>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/speed_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            250 000 km
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/fuel_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Diesel
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/transmission_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Manual
                          </span>
                        </div>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <span className="card-list-item-bot-label-price">
                            $22.000
                          </span>
                        </div>
                        <a href="#" className="card-list-item-bot-link">
                          <span className="card-list-item-bot-link-title">
                            View Details
                          </span>
                          <img
                            className="card-list-item-bot-link-arrow"
                            src="/img/link_arrow.svg"
                            alt="link arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="card-list-item swiper-slide">
                    <div className="card-list-item-top light-blue">
                      <img src="/img/card_item.jpg" alt="" />
                      <div className="card-list-item-top-category">
                        Great Price
                      </div>
                    </div>
                    <div className="card-list-item-bot light-blue">
                      <div className="card-list-item-bot-row">
                        <span className="card-list-item-bot-row-title">
                          Ford Transit - 2021
                        </span>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/speed_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            250 000 km
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/fuel_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Diesel
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/transmission_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Manual
                          </span>
                        </div>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <span className="card-list-item-bot-label-price">
                            $22.000
                          </span>
                        </div>
                        <a href="#" className="card-list-item-bot-link">
                          <span className="card-list-item-bot-link-title">
                            View Details
                          </span>
                          <img
                            className="card-list-item-bot-link-arrow"
                            src="/img/link_arrow.svg"
                            alt="link arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="card-list-item swiper-slide">
                    <div className="card-list-item-top light-blue">
                      <img src="/img/card_item.jpg" alt="" />
                      <div className="card-list-item-top-category">
                        Great Price
                      </div>
                    </div>
                    <div className="card-list-item-bot light-blue">
                      <div className="card-list-item-bot-row">
                        <span className="card-list-item-bot-row-title">
                          Ford Transit - 2021
                        </span>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/speed_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            2500 miles
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/fuel_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Diesel
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/transmission_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Manual
                          </span>
                        </div>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <span className="card-list-item-bot-label-price">
                            $22.000
                          </span>
                        </div>
                        <a href="#" className="card-list-item-bot-link">
                          <span className="card-list-item-bot-link-title">
                            View Details
                          </span>
                          <img
                            className="card-list-item-bot-link-arrow"
                            src="/img/link_arrow.svg"
                            alt="link arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="card-list-item swiper-slide">
                    <div className="card-list-item-top light-blue">
                      <img src="/img/card_item.jpg" alt="" />
                      <div className="card-list-item-top-category">
                        Great Price
                      </div>
                    </div>
                    <div className="card-list-item-bot light-blue">
                      <div className="card-list-item-bot-row">
                        <span className="card-list-item-bot-row-title">
                          Ford Transit - 2021
                        </span>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/speed_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            2500 miles
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/fuel_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Diesel
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/transmission_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Manual
                          </span>
                        </div>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <span className="card-list-item-bot-label-price">
                            $22.000
                          </span>
                        </div>
                        <a href="#" className="card-list-item-bot-link">
                          <span className="card-list-item-bot-link-title">
                            View Details
                          </span>
                          <img
                            className="card-list-item-bot-link-arrow"
                            src="/img/link_arrow.svg"
                            alt="link arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="card-list-item swiper-slide">
                    <div className="card-list-item-top light-blue">
                      <img src="/img/card_item.jpg" alt="" />
                      <div className="card-list-item-top-category">
                        Great Price
                      </div>
                    </div>
                    <div className="card-list-item-bot light-blue">
                      <div className="card-list-item-bot-row">
                        <span className="card-list-item-bot-row-title">
                          Ford Transit - 2021
                        </span>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/speed_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            2500 miles
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/fuel_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Diesel
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/transmission_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Manual
                          </span>
                        </div>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <span className="card-list-item-bot-label-price">
                            $22.000
                          </span>
                        </div>
                        <a href="#" className="card-list-item-bot-link">
                          <span className="card-list-item-bot-link-title">
                            View Details
                          </span>
                          <img
                            className="card-list-item-bot-link-arrow"
                            src="/img/link_arrow.svg"
                            alt="link arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="card-list-item swiper-slide">
                    <div className="card-list-item-top light-blue">
                      <img src="/img/card_item.jpg" alt="" />
                      <div className="card-list-item-top-category">
                        Great Price
                      </div>
                    </div>
                    <div className="card-list-item-bot light-blue">
                      <div className="card-list-item-bot-row">
                        <span className="card-list-item-bot-row-title">
                          Ford Transit - 2021
                        </span>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/speed_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            2500 miles
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/fuel_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Diesel
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/transmission_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Manual
                          </span>
                        </div>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <span className="card-list-item-bot-label-price">
                            $22.000
                          </span>
                        </div>
                        <a href="#" className="card-list-item-bot-link">
                          <span className="card-list-item-bot-link-title">
                            View Details
                          </span>
                          <img
                            className="card-list-item-bot-link-arrow"
                            src="/img/link_arrow.svg"
                            alt="link arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="card-list-item swiper-slide">
                    <div className="card-list-item-top light-blue">
                      <img src="/img/card_item.jpg" alt="" />
                      <div className="card-list-item-top-category">
                        Great Price
                      </div>
                    </div>
                    <div className="card-list-item-bot light-blue">
                      <div className="card-list-item-bot-row">
                        <span className="card-list-item-bot-row-title">
                          Ford Transit - 2021
                        </span>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/speed_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            2500 miles
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/fuel_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Diesel
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/transmission_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Manual
                          </span>
                        </div>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <span className="card-list-item-bot-label-price">
                            $22.000
                          </span>
                        </div>
                        <a href="#" className="card-list-item-bot-link">
                          <span className="card-list-item-bot-link-title">
                            View Details
                          </span>
                          <img
                            className="card-list-item-bot-link-arrow"
                            src="/img/link_arrow.svg"
                            alt="link arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="card-list-item swiper-slide">
                    <div className="card-list-item-top light-blue">
                      <img src="/img/card_item.jpg" alt="" />
                      <div className="card-list-item-top-category">
                        Great Price
                      </div>
                    </div>
                    <div className="card-list-item-bot light-blue">
                      <div className="card-list-item-bot-row">
                        <span className="card-list-item-bot-row-title">
                          Ford Transit - 2021
                        </span>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/speed_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            2500 miles
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/fuel_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Diesel
                          </span>
                        </div>
                        <div className="card-list-item-bot-col">
                          <img
                            className="card-list-item-bot-col-logo"
                            src="/img/transmission_logo.svg"
                            alt=""
                          />
                          <span className="card-list-item-bot-label">
                            Manual
                          </span>
                        </div>
                      </div>
                      <div className="card-list-item-bot-row">
                        <div className="card-list-item-bot-col">
                          <span className="card-list-item-bot-label-price">
                            $22.000
                          </span>
                        </div>
                        <a href="#" className="card-list-item-bot-link">
                          <span className="card-list-item-bot-link-title">
                            View Details
                          </span>
                          <img
                            className="card-list-item-bot-link-arrow"
                            src="/img/link_arrow.svg"
                            alt="link arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="related-pagination swiper-pagination"></div>
                <div className="related-arrow-prev swiper-button-prev"></div>
                <div className="related-arrow-next swiper-button-next"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Car;
