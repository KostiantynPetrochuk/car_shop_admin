import React from "react";

import styles from "./OrderForm.module.css";

const OrderForm = () => {
  return (
    <form className={styles.form} action="/order" method="POST">
      <div className={styles.input}>
        <span className={styles.info}>Firstname</span>
        <input
          className={styles.item}
          type="text"
          name="first_name"
          id="first_name"
        />
      </div>
      <div className={styles.input}>
        <span className={styles.info}>Lastname</span>
        <input
          className={styles.item}
          type="text"
          name="last_name"
          id="last_name"
        />
      </div>
      <div className={styles.input}>
        <span className={styles.info}>Phone</span>
        <input className={styles.item} type="text" name="phone" id="phone" />
      </div>
      <div className={styles.input}>
        <span className={styles.info}>Email</span>
        <input className={styles.item} type="text" name="email" id="email" />
      </div>
      <button className={styles.button} type="button">
        <span>Send</span>
        <img
          className={styles.buttonArrow}
          src="/img/link_arrow.svg"
          alt="link_arrow"
        />
      </button>
    </form>
  );
};

export default OrderForm;
