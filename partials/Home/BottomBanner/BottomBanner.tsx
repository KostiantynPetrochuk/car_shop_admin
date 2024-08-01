import React from "react";

import "./BottomBanner.css";

const BottomBanner = () => {
  return (
    <section className="bottom-banner">
      <div className="container">
        <div className="bottom-banner-inner">
          <div className="bottom-banner-left">
            <img
              className="bottom-banner-img"
              src="/img/bottom_banner.png"
              alt="bottom_banner_img"
            />
          </div>
          <div className="bottom-banner-right">
            <div className="bottom-banner-row">
              <h3 className="bottom-banner-title">
                Have more questions? Don't hesitate to reach us
              </h3>
            </div>
            <div className="bottom-banner-row">
              <a href="#" className="bottom-banner-link">
                <img
                  className="bottom-banner-logo"
                  src="/img/phone_black.svg"
                  alt="phone_logo_dark"
                />
                <span className="bottom-banner-text">+76 956 039 999</span>
              </a>
              <a href="#" className="bottom-banner-link">
                <img
                  className="bottom-banner-logo"
                  src="/img/mail.svg"
                  alt="mail_logo"
                />
                <span className="bottom-banner-text">ali@boxcars.com</span>
              </a>
            </div>
            <div className="bottom-banner-row">
              <a className="bottom-banner-row-link" href="#">
                <span className="bottom-banner-link-text">Get Started</span>
                <img src="/img/link_arrow.svg" alt="arrow_logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
