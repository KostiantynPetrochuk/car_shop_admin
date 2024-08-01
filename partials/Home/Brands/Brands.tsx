import React from "react";

import "./Brands.css";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands-inner">
          <h3 className="brands-title">Browse by Brand</h3>
          <ul className="brands-list">
            <li className="brands-list-item">
              <a className="brands-link" href="#">
                <img
                  className="brands-logo"
                  src="/img/audi_logo.svg"
                  alt="Audi logo"
                />
                <span className="brands-name">Audi</span>
              </a>
            </li>
            <li className="brands-list-item">
              <a className="brands-link" href="#">
                <img
                  className="brands-logo"
                  src="/img/ford_logo.svg"
                  alt="Ford logo"
                />
                <span className="brands-name">Ford</span>
              </a>
            </li>
            <li className="brands-list-item">
              <a className="brands-link" href="#">
                <img
                  className="brands-logo"
                  src="/img/volkswagen_logo.svg"
                  alt="Volkswagen logo"
                />
                <span className="brands-name">Volkswagen</span>
              </a>
            </li>
            <li className="brands-list-item">
              <a className="brands-link" href="#">
                <img
                  className="brands-logo"
                  src="/img/bmw_logo.svg"
                  alt="BMW logo"
                />
                <span className="brands-name">BMW</span>
              </a>
            </li>
            <li className="brands-list-item">
              <a className="brands-link" href="#">
                <img
                  className="brands-logo"
                  src="/img/renault_logo.svg"
                  alt="Renault logo"
                />
                <span className="brands-name">Renault</span>
              </a>
            </li>
            <li className="brands-list-item">
              <a className="brands-link" href="#">
                <img
                  className="brands-logo"
                  src="/img/skoda_logo.svg"
                  alt="Skoda logo"
                />
                <span className="brands-name">Skoda</span>
              </a>
            </li>
            <li className="brands-list-item">
              <a className="brands-link" href="#">
                <img
                  className="brands-logo"
                  src="/img/mazda_logo.svg"
                  alt="Mazda logo"
                />
                <span className="brands-name">Mazda</span>
              </a>
            </li>
            <li className="brands-list-item">
              <a className="brands-link" href="#">
                <img
                  className="brands-logo"
                  src="/img/nissan_logo.svg"
                  alt="Nissan logo"
                />
                <span className="brands-name">Nissan</span>
              </a>
            </li>
            <li className="brands-list-item">
              <a className="brands-link" href="#">
                <img
                  className="brands-logo"
                  src="/img/opel_logo.svg"
                  alt="Opel logo"
                />
                <span className="brands-name">Opel</span>
              </a>
            </li>
          </ul>
          <div className="brands-bottom-link-inner">
            <a href="#" className="brands-bottom-link">
              <span className="brands-bottom-link-title">View All</span>
              <img
                className="brands-bottom-link-arrow"
                src="/img/link_arrow_black.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
