import React from "react";
import Link from "next/link";

import styles from "./Brands.module.css";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands-inner">
          <h3 className={styles.title}>Browse by Brand</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href={`/catalog?brand=Audi`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/audi_logo.svg"
                  alt="Audi logo"
                />
                <span className={styles.name}>Audi</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?brand=Ford`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/ford_logo.svg"
                  alt="Ford logo"
                />
                <span className={styles.name}>Ford</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?brand=Volkswagen`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/volkswagen_logo.svg"
                  alt="Volkswagen logo"
                />
                <span className={styles.name}>Volkswagen</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?brand=BMW`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/bmw_logo.svg"
                  alt="BMW logo"
                />
                <span className={styles.name}>BMW</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?brand=Renault`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/renault_logo.svg"
                  alt="Renault logo"
                />
                <span className={styles.name}>Renault</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?brand=Skoda`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/skoda_logo.svg"
                  alt="Skoda logo"
                />
                <span className={styles.name}>Skoda</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?brand=Mazda`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/mazda_logo.svg"
                  alt="Mazda logo"
                />
                <span className={styles.name}>Mazda</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?brand=Nissan`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/nissan_logo.svg"
                  alt="Nissan logo"
                />
                <span className={styles.name}>Nissan</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/catalog?brand=Opel`} className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/opel_logo.svg"
                  alt="Opel logo"
                />
                <span className={styles.name}>Opel</span>
              </Link>
            </li>
          </ul>
          <div className={styles.bottomLinkInner}>
            <Link href={`/catalog`} className={styles.bottomLink}>
              <span className={styles.bottomLinkTitle}>View All</span>
              <img
                className={styles.bottomLinkArrow}
                src="/img/link_arrow_black.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
