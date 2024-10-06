"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import LanguageSelect from "../LanguageSelect";
import styles from "./Header.module.css";

type HeaderProps = {
  locale: string;
};

const Header = ({ locale }: HeaderProps) => {
  const t = useTranslations("Home");
  const [mobMenu, setMobMenu] = useState(false);
  const handleClickBurger = () => {
    setMobMenu(!mobMenu);
  };

  useEffect(() => {
    if (mobMenu) {
      document.body.classList.add("freezed");
    } else {
      document.body.classList.remove("freezed");
    }
    return () => {
      document.body.classList.remove("freezed");
    };
  }, [mobMenu]);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <img className={styles.logo} src="/img/logo.jpeg" />
        </Link>
        <a href="tel:+75123456789" className={styles.phoneInner}>
          <img className={styles.phoneLogo} src="/img/phone.svg" />
          <span className={styles.phone}>+75 123 456 789</span>
        </a>
      </div>
      <div className={styles.right}>
        <Link href="/catalog" className={styles.link}>
          {t("catalog")}
        </Link>
        {/* <a href="#" className="header-link">
          Listings
        </a>
        <a href="#" className="header-link">
          Blog
        </a>
        <a href="#" className="header-link">
          Pages
        </a>
        <a href="#" className="header-link">
          About Us
        </a>
        <a href="#" className="header-link">
          Contacts
        </a> */}
        <LanguageSelect locale={locale} />
      </div>
      <div className={styles.burgerInner}>
        <div className={styles.burger} onClick={handleClickBurger}>
          <span
            style={{
              transform: mobMenu ? "rotate(45deg)" : "rotate(0deg)",
              top: mobMenu ? "49%" : "4px",
            }}
            className={styles.burgerItem}
          ></span>
          <span
            style={{
              transform: mobMenu ? "translateX(-50px)" : "translateX(0px)",
              opacity: mobMenu ? "0" : "1",
            }}
            className={styles.burgerItem}
          ></span>
          <span
            style={{
              transform: mobMenu ? "rotate(-45deg)" : "rotate(0deg)",
              bottom: mobMenu ? "49%" : "4px",
            }}
            className={styles.burgerItem}
          ></span>
        </div>
        <nav
          style={{
            display: mobMenu ? "flex" : "none",
          }}
          className={styles.mobileMenu}
        >
          <ul className={styles.mobileMenuList}>
            <Link href="/catalog" className={styles.mobileLink}>
              Catalog
            </Link>
            {/* <li>
              <a href="#">Listings</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
