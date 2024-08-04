import React from "react";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <img className={styles.logo} src="/img/logo.svg" />
        </Link>
        <div className={styles.phoneInner}>
          <img className={styles.phoneLogo} src="/img/phone.svg" />
          <span className={styles.phone}>+75 123 456 789</span>
        </div>
      </div>
      <div className={styles.right}>
        <Link href="/catalog" className={styles.link}>
          Catalog
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
      </div>
      <div className={styles.burgerInner}>
        <div className={styles.burger}>
          <span className={styles.burgerItem}></span>
          <span className={styles.burgerItem}></span>
          <span className={styles.burgerItem}></span>
        </div>
        <nav className={styles.mobileMenu}>
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
