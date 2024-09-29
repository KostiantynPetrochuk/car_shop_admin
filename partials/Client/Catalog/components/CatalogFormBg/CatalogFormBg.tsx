import React from "react";

import styles from "./CatalogFormBg.module.css";

type CatalogFormBgProps = {
  isFormVisible: boolean;
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const CatalogFormBg = ({
  isFormVisible,
  setFormVisible,
}: CatalogFormBgProps) => {
  const handleClick = () => {
    setFormVisible(false);
    const body = document.querySelector("body");
    if (!body) return;
    body.classList.remove("freezed");
  };

  if (!isFormVisible) {
    return null;
  }
  return <div className={styles.formBg} onClick={handleClick}></div>;
};

export default CatalogFormBg;
