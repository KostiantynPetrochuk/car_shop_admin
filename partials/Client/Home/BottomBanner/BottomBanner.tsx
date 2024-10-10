import React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import styles from "./BottomBanner.module.css";

const BottomBanner = async () => {
  const t = await getTranslations("Home");
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <img
              className={styles.image}
              src="/img/bottom_banner.png"
              alt="bottom_banner_img"
            />
          </div>
          <div className={styles.right}>
            <div className={styles.row}>
              <h3 className={styles.title}>{t("bottomBannerInfo")}</h3>
            </div>
            <div className={styles.row}>
              <a href="tel:+75123456789" className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/phone_black.svg"
                  alt="phone_logo_dark"
                />
                <span>+76 956 039 999</span>
              </a>
              <a href="mailto:ali@boxcars.com" className={styles.link}>
                <img
                  className={styles.logo}
                  src="/img/mail.svg"
                  alt="mail_logo"
                />
                <span>ali@boxcars.com</span>
              </a>
            </div>
            <div className={styles.row}>
              <Link href={"/catalog"} className={styles.rowLink}>
                <span>{t("getStarted")}</span>
                <img
                  className={styles.rowLinkImg}
                  src="/img/link_arrow.svg"
                  alt="arrow_logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
