import { getTranslations } from "next-intl/server";

import styles from "./WhyUs.module.css";

const WhyUs = async () => {
  const t = await getTranslations("Home");
  return (
    <section className={styles.whyus}>
      <div className="container">
        <div className="whyus-inner">
          <h3 className={styles.title}>{t("whyChooseUs")}</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/img/whyus_logo_1.svg" alt="whyus_logo" />
              <h4 className={styles.itemTitle}>{t("specialOffers")}</h4>
              <span className={styles.info}>{t("specialOffersInfo")}</span>
            </li>
            <li className={styles.item}>
              <img src="/img/whyus_logo_2.svg" alt="whyus_logo_2" />
              <h4 className={styles.itemTitle}>{t("trustedCarDealership")}</h4>
              <span className={styles.info}>
                {t("trustedCarDealershipInfo")}
              </span>
            </li>
            <li className={styles.item}>
              <img src="/img/whyus_logo_3.svg" alt="whyus_logo_3" />
              <h4 className={styles.itemTitle}>{t("transparentPricing")}</h4>
              <span className={styles.info}>{t("transparentPricingInfo")}</span>
            </li>
            <li className={styles.item}>
              <img src="/img/whyus_logo_4.svg" alt="whyus_logo_4" />
              <h4 className={styles.itemTitle}>{t("wideSelectionOfCars")}</h4>
              <span className={styles.info}>
                {t("wideSelectionOfCarsInfo")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
