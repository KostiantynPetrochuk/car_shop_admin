import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-inner">
          <div className="footer-top">
            <div className="footer-top-col">
              <img className="footer-left-logo" src="/img/logo.svg" />
              <div className="footer-left-phone-inner">
                <img
                  className="footer-left-phone-inner-logo"
                  src="/img/phone.svg"
                />
                <span>+75 123 456 789</span>
              </div>
            </div>
            <div className="footer-top-col">
              <span className="footer-col-title">Company</span>
              <a className="footer-col-link" href="#">
                About Us
              </a>
              <a className="footer-col-link" href="#">
                Blog
              </a>
              <a className="footer-col-link" href="#">
                Services
              </a>
              <a className="footer-col-link" href="#">
                FAQs
              </a>
              <a className="footer-col-link" href="#">
                Terms
              </a>
              <a className="footer-col-link" href="#">
                Contact Us
              </a>
            </div>
            <div className="footer-top-col">
              <span className="footer-col-title">Top Brands</span>
              <a className="footer-col-link" href="#">
                Toyota
              </a>
              <a className="footer-col-link" href="#">
                Porsche
              </a>
              <a className="footer-col-link" href="#">
                Audi
              </a>
              <a className="footer-col-link" href="#">
                BMW
              </a>
              <a className="footer-col-link" href="#">
                Ford
              </a>
              <a className="footer-col-link" href="#">
                Nissan
              </a>
              <a className="footer-col-link" href="#">
                Peugeot
              </a>
              <a className="footer-col-link" href="#">
                Volkswagen
              </a>
            </div>
            <div className="footer-top-col">
              <span className="footer-col-title">Vehicles Type</span>
              <a className="footer-col-link" href="#">
                Sedan
              </a>
              <a className="footer-col-link" href="#">
                Hatchback
              </a>
              <a className="footer-col-link" href="#">
                SUV
              </a>
              <a className="footer-col-link" href="#">
                Hybrid
              </a>
              <a className="footer-col-link" href="#">
                Electric
              </a>
              <a className="footer-col-link" href="#">
                Coupe
              </a>
              <a className="footer-col-link" href="#">
                Truck
              </a>
              <a className="footer-col-link" href="#">
                Convertible
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bot-inner">
        <div className="container">
          <div className="footer-bot">
            © 2024 exemple.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
