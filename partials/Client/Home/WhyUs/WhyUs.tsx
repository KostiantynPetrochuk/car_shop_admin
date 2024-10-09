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
              <h4 className={styles.itemTitle}>Special Offers</h4>
              <span className={styles.info}>
                We provide attractive terms that fit your budget. We aim to make
                the car-buying process as convenient as possible for you.
              </span>
            </li>
            <li className={styles.item}>
              <img src="/img/whyus_logo_2.svg" alt="whyus_logo_2" />
              <h4 className={styles.itemTitle}>Trusted Car Dealership</h4>
              <span className={styles.info}>
                With years of experience, our dealership has built a reputation
                for honesty and reliability. We are committed to providing you
                with a comfortable and trustworthy car-buying experience.
              </span>
            </li>
            <li className={styles.item}>
              <img src="/img/whyus_logo_3.svg" alt="whyus_logo_3" />
              <h4 className={styles.itemTitle}>Transparent Pricing</h4>
              <span className={styles.info}>
                What you see is what you pay. We offer transparent pricing with
                no hidden fees or unexpected charges, so you know exactly what
                you're paying for.
              </span>
            </li>
            <li className={styles.item}>
              <img src="/img/whyus_logo_4.svg" alt="whyus_logo_4" />
              <h4 className={styles.itemTitle}>Wide Selection of Cars</h4>
              <span className={styles.info}>
                We offer a diverse range of vehicles to suit every taste and
                budget. Whether you're looking for a family car, a luxury
                vehicle, or something in between, we have it all.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
