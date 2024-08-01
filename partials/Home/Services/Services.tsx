import React from "react";

import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-inner">
          <div className="services-item">
            <div className="services-item-left">
              <h3 className="services-item-title">Are You Looking</h3>
              <h3 className="services-item-title">For a Car ?</h3>
              <span className="services-item-info">
                We are committed to providing our customers with exceptional
                service.
              </span>
              <a href="#" className="services-item-link">
                <span className="services-item-link-label">Get Started</span>
                <img
                  className="services-item-link-arrow"
                  src="img/link_arrow.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="services-item-right">
              <img
                className="service-logo"
                src="img/electric_car_logo.svg"
                alt=""
              />
            </div>
          </div>

          <div className="services-item">
            <div className="services-item-left">
              <h3 className="services-item-title">Do You Want to</h3>
              <h3 className="services-item-title">Sell a Car ?</h3>
              <span className="services-item-info">
                We are committed to providing our customers with exceptional
                service.
              </span>
              <a href="#" className="services-item-link">
                <span className="services-item-link-label">Get Started</span>
                <img
                  className="services-item-link-arrow"
                  src="img/link_arrow.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="services-item-right">
              <img
                className="service-logo"
                src="img/electric-car2_logo.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
