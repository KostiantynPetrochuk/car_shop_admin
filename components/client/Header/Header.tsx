import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img className="header-left-logo" src="/img/logo.svg" />
        <div className="header-left-phone-inner">
          <img
            className="header-left-phone-inner-logo"
            src="/img/phone.svg"
          />
          <span>+75 123 456 789</span>
        </div>
      </div>
      <div className="header-right">
        <a href="#" className="header-link">
          Home
        </a>
        <a href="#" className="header-link">
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
        </a>
      </div>
      <div className="header-burger-inner">
        <div className="header-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="mobile-menu">
          <ul className="mobile-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
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
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
