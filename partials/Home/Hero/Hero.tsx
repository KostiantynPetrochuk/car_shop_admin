import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-top">
          <div className="hero-top-info">
            Find cars for sale and for rent near you
          </div>
          <h1 className="hero-top-title">Find You Dream Car</h1>

          <form className="hero-top-filters" action="/catalog" method="GET">
            <div className="hero-top-filter">
              <div className="hero-top-filter-value">All Cars</div>
              <div className="hero-top-filter-dropdown">
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="all_cars"
                >
                  All Cars
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="whole_cars"
                >
                  Whole Cars
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="damaged_cars"
                >
                  Damaged Cars
                </div>
              </div>
              <input type="hidden" name="carCondition" value="all_cars" />
            </div>

            <div className="hero-top-filter">
              <div className="hero-top-filter-value">All Makes</div>
              <div className="hero-top-filter-dropdown">
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="all_makes"
                >
                  All Makes
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="audi"
                >
                  Audi
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="aston_martin"
                >
                  Aston Martin
                </div>
                <div className="hero-top-filter-dropdown-item" data-value="bmw">
                  BMW
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="volvo"
                >
                  Volvo
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="mercedes"
                >
                  Mercedes
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="jaguar"
                >
                  Jaguar
                </div>
              </div>
              <input type="hidden" name="make" value="any_makes" />
            </div>

            <div className="hero-top-filter">
              <div className="hero-top-filter-value">All Models</div>
              <div className="hero-top-filter-dropdown">
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="all_models"
                >
                  All Models
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="a_4"
                  data-make="audi"
                >
                  A4
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="a_5"
                  data-make="audi"
                >
                  A5
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="a_6"
                  data-make="audi"
                >
                  A6
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="a_7"
                  data-make="audi"
                >
                  A7
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="a_8"
                  data-make="audi"
                >
                  A8
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="q_3"
                  data-make="audi"
                >
                  Q3
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="dbx"
                  data-make="aston_martin"
                >
                  DBX
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="vantage"
                  data-make="aston_martin"
                >
                  Vantage
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="db12"
                  data-make="aston_martin"
                >
                  DB12
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="dbs"
                  data-make="aston_martin"
                >
                  DBS
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="x1"
                  data-make="bmw"
                >
                  X1
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="x2"
                  data-make="bmw"
                >
                  X2
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="x3"
                  data-make="bmw"
                >
                  X3
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="x4"
                  data-make="bmw"
                >
                  X4
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="xc90"
                  data-make="volvo"
                >
                  XC90
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="s90"
                  data-make="volvo"
                >
                  S90
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="xc60"
                  data-make="volvo"
                >
                  XC60
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="v60"
                  data-make="volvo"
                >
                  V60
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="eqb"
                  data-make="mercedes"
                >
                  EQB
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="glb"
                  data-make="mercedes"
                >
                  GLB
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="c_className"
                  data-make="mercedes"
                >
                  C-className
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="s_className"
                  data-make="mercedes"
                >
                  S-className
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="f_pace"
                  data-make="jaguar"
                >
                  F-Pace
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="e_pace"
                  data-make="jaguar"
                >
                  E-Pace
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="f_type"
                  data-make="jaguar"
                >
                  F-Type
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="xe"
                  data-make="jaguar"
                >
                  XE
                </div>
              </div>
              <input type="hidden" name="model" value="all_models" />
            </div>

            <div className="hero-top-filter">
              <div className="hero-top-filter-value">All Prices</div>
              <div className="hero-top-filter-dropdown">
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="1000_2000"
                >
                  1 000 $ - 2 000 $
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="2000_3000"
                >
                  2 000 $ - 3 000 $
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="3000_4000"
                >
                  3 000 $ - 4 000 $
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="4000_5000"
                >
                  4 000 $ - 5 000 $
                </div>
                <div
                  className="hero-top-filter-dropdown-item"
                  data-value="5000_10000"
                >
                  5 000 $ - 10 000 $
                </div>
              </div>
              <input type="hidden" name="prices" value="1000_2000" />
            </div>

            <button type="submit" className="hero-top-filter-button">
              <img
                className="hero-top-filter-button-logo"
                src="/img/search.svg"
                alt="search"
              />
            </button>
          </form>
        </div>
        <div className="hero-bot">
          <img src="/img/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
