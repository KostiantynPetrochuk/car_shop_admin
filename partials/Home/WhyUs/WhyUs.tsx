import React from "react";

import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section className="whyus">
      <div className="container">
        <div className="whyus-inner">
          <h3 className="whyus-title">Why Choose Us?</h3>
          <ul className="whyus-list">
            <li className="whyus-list-item">
              <img
                className="whyus-list-item-logo"
                src="/img/whyus_logo_1.svg"
                alt="whyus_logo"
              />
              <h4 className="whyus-list-item-title">
                Special Financing Offers
              </h4>
              <span className="whyus-list-item-info">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </span>
            </li>
            <li className="whyus-list-item">
              <img
                className="whyus-list-item-logo"
                src="/img/whyus_logo_2.svg"
                alt="whyus_logo_2"
              />
              <h4 className="whyus-list-item-title">Trusted Car Dealership</h4>
              <span className="whyus-list-item-info">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </span>
            </li>
            <li className="whyus-list-item">
              <img
                className="whyus-list-item-logo"
                src="/img/whyus_logo_3.svg"
                alt="whyus_logo_3"
              />
              <h4 className="whyus-list-item-title">Transparent Pricing</h4>
              <span className="whyus-list-item-info">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </span>
            </li>
            <li className="whyus-list-item">
              <img
                className="whyus-list-item-logo"
                src="/img/whyus_logo_4.svg"
                alt="whyus_logo_4"
              />
              <h4 className="whyus-list-item-title">Expert Car Service</h4>
              <span className="whyus-list-item-info">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
