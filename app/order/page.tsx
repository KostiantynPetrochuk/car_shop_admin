import React from "react";

import { Header, Footer } from "@/components/client";
import { Top, SortForm, CatalogBody } from "@/partials/Catalog";

import "./page.css";

const Order = () => {
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
                <a className="breadcrumbs-link" href="#">
                  T-Cross – 2023
                </a>
                <span>/</span>
                <span className="breadcrumbs-last">Place an Order</span>
              </div>
              <h1 className="breadcrumbs-title">Place an Order</h1>
            </div>
          </div>
        </section>
        <section className="order">
          <div className="container">
            <section className="order-inner">
              <div className="order-item">
                <div className="order-item-col">
                  <img
                    className="order-item-image"
                    src="/img/order_item.png"
                    alt="order_item"
                  />
                </div>
                <div className="order-item-col">
                  <h3 className="order-item-top">T-Cross – 2023</h3>
                  <div className="order-item-mid">
                    <div className="order-item-mid-row">
                      <img
                        className="order-item-mid-row-logo"
                        src="/img/speed_logo.svg"
                        alt="speed_logo"
                      />
                      <span className="order-item-mid-row-label">
                        250 000 km
                      </span>
                    </div>
                    <div className="order-item-mid-row">
                      <img
                        className="order-item-mid-row-logo"
                        src="/img/fuel_logo.svg"
                        alt="fuel_logo"
                      />
                      <span className="order-item-mid-row-label">Petrol</span>
                    </div>
                    <div className="order-item-mid-row">
                      <img
                        className="order-item-mid-row-logo"
                        src="/img/transmission_logo.svg"
                        alt="transmission_logo"
                      />
                      <span className="order-item-mid-row-label">CVT</span>
                    </div>
                  </div>
                  <div className="order-item-bot">$15.000</div>
                </div>
              </div>
              <form className="order-form" action="/order" method="POST">
                <div className="order-form-input">
                  <span className="order-form-input-info">Firstname</span>
                  <input
                    className="order-form-input-item"
                    type="text"
                    name="first_name"
                    id="first_name"
                  />
                </div>
                <div className="order-form-input">
                  <span className="order-form-input-info">Lastname</span>
                  <input
                    className="order-form-input-item"
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="order-form-input">
                  <span className="order-form-input-info">Phone</span>
                  <input
                    className="order-form-input-item"
                    type="text"
                    name="phone"
                    id="phone"
                  />
                </div>
                <div className="order-form-input">
                  <span className="order-form-input-info">Email</span>
                  <input
                    className="order-form-input-item"
                    type="text"
                    name="email"
                    id="email"
                  />
                </div>
                <button className="order-form-button" type="button">
                  <span>Send</span>
                  <img src="/img/link_arrow.svg" alt="link_arrow" />
                </button>
              </form>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Order;
