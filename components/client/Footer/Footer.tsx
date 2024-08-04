import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="footer-top-inner">
          <div className={styles.top}>
            <div className="footer-top-col">
              <img className={styles.logo} src="/img/logo.svg" />
              <div className={styles.phoneInner}>
                <img src="/img/phone.svg" />
                <span>+75 123 456 789</span>
              </div>
            </div>
            <div className={styles.col}>
              <span className={styles.title}>Company</span>
              <a className={styles.link} href="#">
                About Us
              </a>
              <a className={styles.link} href="#">
                Blog
              </a>
              <a className={styles.link} href="#">
                Services
              </a>
              <a className={styles.link} href="#">
                FAQs
              </a>
              <a className={styles.link} href="#">
                Terms
              </a>
              <a className={styles.link} href="#">
                Contact Us
              </a>
            </div>
            <div className={styles.col}>
              <span className={styles.title}>Top Brands</span>
              <a className={styles.link} href="#">
                Toyota
              </a>
              <a className={styles.link} href="#">
                Porsche
              </a>
              <a className={styles.link} href="#">
                Audi
              </a>
              <a className={styles.link} href="#">
                BMW
              </a>
              <a className={styles.link} href="#">
                Ford
              </a>
              <a className={styles.link} href="#">
                Nissan
              </a>
              <a className={styles.link} href="#">
                Peugeot
              </a>
              <a className={styles.link} href="#">
                Volkswagen
              </a>
            </div>
            <div className={styles.col}>
              <span className={styles.title}>Vehicles Type</span>
              <a className={styles.link} href="#">
                Sedan
              </a>
              <a className={styles.link} href="#">
                Hatchback
              </a>
              <a className={styles.link} href="#">
                SUV
              </a>
              <a className={styles.link} href="#">
                Hybrid
              </a>
              <a className={styles.link} href="#">
                Electric
              </a>
              <a className={styles.link} href="#">
                Coupe
              </a>
              <a className={styles.link} href="#">
                Truck
              </a>
              <a className={styles.link} href="#">
                Convertible
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.botInner}>
        <div className="container">
          <div className={styles.bot}>
            © 2024 exemple.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
