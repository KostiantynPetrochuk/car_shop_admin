import React from "react";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div>
          <div className={styles.info}>
            Find cars for sale and for rent near you
          </div>
          <h1 className={styles.title}>Find You Dream Car</h1>

          <form className={styles.filters} action="/catalog" method="GET">
            <div className={styles.filter}>
              <div className={styles.value}>All Cars</div>
              <div className={styles.dropdown}>
                <div className={styles.dropdownItem} data-value="all_cars">
                  All Cars
                </div>
                <div className={styles.dropdownItem} data-value="intact_cars">
                  Intact Cars
                </div>
                <div className={styles.dropdownItem} data-value="damaged_cars">
                  Damaged Cars
                </div>
              </div>
              <input type="hidden" name="carCondition" value="all_cars" />
            </div>

            <div className={styles.filter}>
              <div className={styles.value}>All Makes</div>
              <div className={styles.dropdown}>
                <div className={styles.dropdownItem} data-value="all_makes">
                  All Makes
                </div>
                <div className={styles.dropdownItem} data-value="audi">
                  Audi
                </div>
                <div className={styles.dropdownItem} data-value="aston_martin">
                  Aston Martin
                </div>
                <div className={styles.dropdownItem} data-value="bmw">
                  BMW
                </div>
                <div className={styles.dropdownItem} data-value="volvo">
                  Volvo
                </div>
                <div className={styles.dropdownItem} data-value="mercedes">
                  Mercedes
                </div>
                <div className={styles.dropdownItem} data-value="jaguar">
                  Jaguar
                </div>
              </div>
              <input type="hidden" name="make" value="any_makes" />
            </div>

            <div className={styles.filter}>
              <div className={styles.value}>All Models</div>
              <div className={styles.dropdown}>
                <div className={styles.dropdownItem} data-value="all_models">
                  All Models
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="a_4"
                  data-make="audi"
                >
                  A4
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="a_5"
                  data-make="audi"
                >
                  A5
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="a_6"
                  data-make="audi"
                >
                  A6
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="a_7"
                  data-make="audi"
                >
                  A7
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="a_8"
                  data-make="audi"
                >
                  A8
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="q_3"
                  data-make="audi"
                >
                  Q3
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="dbx"
                  data-make="aston_martin"
                >
                  DBX
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="vantage"
                  data-make="aston_martin"
                >
                  Vantage
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="db12"
                  data-make="aston_martin"
                >
                  DB12
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="dbs"
                  data-make="aston_martin"
                >
                  DBS
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="x1"
                  data-make="bmw"
                >
                  X1
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="x2"
                  data-make="bmw"
                >
                  X2
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="x3"
                  data-make="bmw"
                >
                  X3
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="x4"
                  data-make="bmw"
                >
                  X4
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="xc90"
                  data-make="volvo"
                >
                  XC90
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="s90"
                  data-make="volvo"
                >
                  S90
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="xc60"
                  data-make="volvo"
                >
                  XC60
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="v60"
                  data-make="volvo"
                >
                  V60
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="eqb"
                  data-make="mercedes"
                >
                  EQB
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="glb"
                  data-make="mercedes"
                >
                  GLB
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="c_className"
                  data-make="mercedes"
                >
                  C-className
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="s_className"
                  data-make="mercedes"
                >
                  S-className
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="f_pace"
                  data-make="jaguar"
                >
                  F-Pace
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="e_pace"
                  data-make="jaguar"
                >
                  E-Pace
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="f_type"
                  data-make="jaguar"
                >
                  F-Type
                </div>
                <div
                  className={styles.dropdownItem}
                  data-value="xe"
                  data-make="jaguar"
                >
                  XE
                </div>
              </div>
              <input type="hidden" name="model" value="all_models" />
            </div>

            <div className={styles.filter}>
              <div className={styles.value}>All Prices</div>
              <div className={styles.dropdown}>
                <div className={styles.dropdownItem} data-value="1000_2000">
                  1 000 $ - 2 000 $
                </div>
                <div className={styles.dropdownItem} data-value="2000_3000">
                  2 000 $ - 3 000 $
                </div>
                <div className={styles.dropdownItem} data-value="3000_4000">
                  3 000 $ - 4 000 $
                </div>
                <div className={styles.dropdownItem} data-value="4000_5000">
                  4 000 $ - 5 000 $
                </div>
                <div className={styles.dropdownItem} data-value="5000_10000">
                  5 000 $ - 10 000 $
                </div>
              </div>
              <input type="hidden" name="prices" value="1000_2000" />
            </div>

            <button type="submit" className={styles.button}>
              <img src="/img/search.svg" alt="search" />
            </button>
          </form>
        </div>
        <div className={styles.bot}>
          <img className={styles.botImg} src="/img/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
