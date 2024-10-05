import React from "react";
import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="footer-top-inner">
          <div className={styles.top}>
            <div className={styles.topCol}>
              <Link href="/">
                <img className={styles.logo} src="/img/logo.jpeg" />
              </Link>
              <a href="tel:+75123456789" className={styles.phoneInner}>
                <img src="/img/phone.svg" />
                <span>+75 123 456 789</span>
              </a>
            </div>
            <div className={styles.col}>
              <span className={styles.title}>Company</span>
              <a className={styles.disabledLink} href="/">
                About Us
              </a>
              <a className={styles.disabledLink} href="/">
                Blog
              </a>
              <a className={styles.disabledLink} href="/">
                Services
              </a>
              <a className={styles.disabledLink} href="/">
                FAQs
              </a>
              <a className={styles.disabledLink} href="/">
                Terms
              </a>
              <a className={styles.disabledLink} href="/">
                Contact Us
              </a>
            </div>
            <div className={styles.col}>
              <span className={styles.title}>Top Brands</span>
              <Link href={`/catalog?brand=Toyota`} className={styles.link}>
                Toyota
              </Link>
              <Link href={`/catalog?brand=Porsche`} className={styles.link}>
                Porsche
              </Link>
              <Link href={`/catalog?brand=Audi`} className={styles.link}>
                Audi
              </Link>
              <Link href={`/catalog?brand=BMW`} className={styles.link}>
                BMW
              </Link>
              <Link href={`/catalog?brand=Ford`} className={styles.link}>
                Ford
              </Link>
              <Link href={`/catalog?brand=Nissan`} className={styles.link}>
                Nissan
              </Link>
              <Link href={`/catalog?brand=Peugeot`} className={styles.link}>
                Peugeot
              </Link>
              <Link href={`/catalog?brand=Volkswagen`} className={styles.link}>
                Volkswagen
              </Link>
            </div>
            <div className={styles.col}>
              <span className={styles.title}>Vehicles Type</span>
              <Link href={`/catalog?bodyType=sedan`} className={styles.link}>
                Sedan
              </Link>
              <Link
                href={`/catalog?bodyType=hatchback`}
                className={styles.link}
              >
                Hatchback
              </Link>
              <Link href={`/catalog?bodyType=suv`} className={styles.link}>
                SUV
              </Link>
              <Link href={`/catalog?bodyType=diesel`} className={styles.link}>
                Diesel
              </Link>
              <Link
                href={`/catalog?fuelType=electricity`}
                className={styles.link}
              >
                Electric
              </Link>
              <Link href={`/catalog?bodyType=coupe`} className={styles.link}>
                Coupe
              </Link>
              <Link href={`/catalog?bodyType=truck`} className={styles.link}>
                Truck
              </Link>
              <Link
                href={`/catalog?bodyType=convertible`}
                className={styles.link}
              >
                Convertible
              </Link>
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
