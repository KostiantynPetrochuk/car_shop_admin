import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./Footer.module.css";

const Footer = () => {
  const t = useTranslations("Footer");
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
              <span className={styles.title}>{t("company")}</span>
              <a className={styles.disabledLink} href="/">
                {t("aboutUs")}
              </a>
              <a className={styles.disabledLink} href="/">
                {t("blog")}
              </a>
              <a className={styles.disabledLink} href="/">
                {t("services")}
              </a>
              <a className={styles.disabledLink} href="/">
                {t("faqs")}
              </a>
              <a className={styles.disabledLink} href="/">
                {t("terms")}
              </a>
              <a className={styles.disabledLink} href="/">
                {t("contactUs")}
              </a>
            </div>
            <div className={styles.col}>
              <span className={styles.title}>{t("topBrands")}</span>
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
              <span className={styles.title}>{t("vehiclesTypes")}</span>
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
            © 2024 exemple.com. {t("allRightsReserved")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
