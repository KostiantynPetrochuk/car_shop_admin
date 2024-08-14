import React from "react";

import styles from "./Brands.module.css";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands-inner">
          <h3 className={styles.title}>Browse by Brand</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/audi_logo.svg"
                  alt="Audi logo"
                />
                <span className={styles.name}>Audi</span>
              </a>
            </li>
            <li className={styles.item}> 
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/ford_logo.svg"
                  alt="Ford logo"
                />
                <span className={styles.name}>Ford</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/volkswagen_logo.svg"
                  alt="Volkswagen logo"
                />
                <span className={styles.name}>Volkswagen</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/bmw_logo.svg"
                  alt="BMW logo"
                />
                <span className={styles.name}>BMW</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/renault_logo.svg"
                  alt="Renault logo"
                />
                <span className={styles.name}>Renault</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/skoda_logo.svg"
                  alt="Skoda logo"
                />
                <span className={styles.name}>Skoda</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/mazda_logo.svg"
                  alt="Mazda logo"
                />
                <span className={styles.name}>Mazda</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/nissan_logo.svg"
                  alt="Nissan logo"
                />
                <span className={styles.name}>Nissan</span>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                <img
                  className={styles.logo}
                  src="/img/opel_logo.svg"
                  alt="Opel logo"
                />
                <span className={styles.name}>Opel</span>
              </a>
            </li>
          </ul>
          <div className={styles.bottomLinkInner}>
            <a href="#" className={styles.bottomLink}>
              <span className={styles.bottomLinkTitle}>View All</span>
              <img
                className={styles.bottomLinkArrow}
                src="/img/link_arrow_black.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
