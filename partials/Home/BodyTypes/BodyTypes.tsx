import React from "react";

import "./BodyTypes.css";

const BodyTypes = () => {
  return (
    <section className="types">
      <div className="container">
        <div className="types-inner">
          <h3 className="types-title">Browse by Type</h3>
          <ul className="types-list">
            <li className="types-list-item">
              <a className="types-link" href="#">
                <img
                  className="types-logo"
                  src="/img/suv_logo.svg"
                  alt="SUV logo"
                />
                <span className="types-name">SUV</span>
              </a>
            </li>
            <li className="types-list-item">
              <a className="types-link" href="#">
                <img
                  className="types-logo"
                  src="/img/sedan_logo.svg"
                  alt="Sedan logo"
                />
                <span className="types-name">Sedan</span>
              </a>
            </li>
            <li className="types-list-item">
              <a className="types-link" href="#">
                <img
                  className="types-logo"
                  src="/img/hatchback_logo.svg"
                  alt="Hatchback logo"
                />
                <span className="types-name">Hatchback</span>
              </a>
            </li>
            <li className="types-list-item">
              <a className="types-link" href="#">
                <img
                  className="types-logo"
                  src="/img/coupe_logo.svg"
                  alt="Coupe logo"
                />
                <span className="types-name">Coupe</span>
              </a>
            </li>
            <li className="types-list-item">
              <a className="types-link" href="#">
                <img
                  className="types-logo"
                  src="/img/hybrid_logo.svg"
                  alt="Hybrid logo"
                />
                <span className="types-name">Hybrid</span>
              </a>
            </li>
            <li className="types-list-item">
              <a className="types-link" href="#">
                <img
                  className="types-logo"
                  src="/img/convertible_logo.svg"
                  alt="Convertible logo"
                />
                <span className="types-name">Convertible</span>
              </a>
            </li>
            <li className="types-list-item">
              <a className="types-link" href="#">
                <img
                  className="types-logo"
                  src="/img/van_logo.svg"
                  alt="SUV logo"
                />
                <span className="types-name">Van</span>
              </a>
            </li>
            <li className="types-list-item">
              <a className="types-link" href="#">
                <img
                  className="types-logo"
                  src="/img/truck_logo.svg"
                  alt="Truck logo"
                />
                <span className="types-name">Truck</span>
              </a>
            </li>
            <li className="types-list-item">
              <a className="types-link" href="#">
                <img
                  className="types-logo"
                  src="/img/electric_logo.svg"
                  alt="Electic logo"
                />
                <span className="types-name">Electic</span>
              </a>
            </li>
          </ul>
          <div className="types-bottom-link-inner">
            <a href="#" className="types-bottom-link">
              <span className="types-bottom-link-title">View All</span>
              <img
                className="types-bottom-link-arrow"
                src="/img/link_arrow_black.svg"
                alt="arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyTypes;
