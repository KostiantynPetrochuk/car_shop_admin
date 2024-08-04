import React from "react";

import styles from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <section className={styles.whyus}>
      <div className="container">
        <div className="whyus-inner">
          <h3 className={styles.title}>Why Choose Us?</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/img/whyus_logo_1.svg" alt="whyus_logo" />
              <h4 className={styles.itemTitle}>Special Financing Offers</h4>
              <span className={styles.info}>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </span>
            </li>
            <li className={styles.item}>
              <img src="/img/whyus_logo_2.svg" alt="whyus_logo_2" />
              <h4 className={styles.itemTitle}>Trusted Car Dealership</h4>
              <span className={styles.info}>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </span>
            </li>
            <li className={styles.item}>
              <img src="/img/whyus_logo_3.svg" alt="whyus_logo_3" />
              <h4 className={styles.itemTitle}>Transparent Pricing</h4>
              <span className={styles.info}>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </span>
            </li>
            <li className={styles.item}>
              <img src="/img/whyus_logo_4.svg" alt="whyus_logo_4" />
              <h4 className={styles.itemTitle}>Expert Car Service</h4>
              <span className={styles.info}>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
