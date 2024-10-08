"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./LanguageSelect.module.css";
import Image from "next/image";

const languages = [
  { code: "en", name: "English", flag: "/img/en.svg" },
  { code: "ua", name: "Українська", flag: "/img/ua.svg" },
  { code: "de", name: "Deutsch", flag: "/img/de.svg" },
  { code: "pl", name: "Polski", flag: "/img/pl.svg" },
];

type LanguageSelectProps = {
  locale: string;
};

const LanguageSelect = ({ locale }: LanguageSelectProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(locale);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
    fetch("/api/locale", {
      method: "POST",
      body: JSON.stringify({ locale: code }),
    }).then(() => {
      window.location.reload();
    });
  };

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles.languageSelect}
      onClick={handleClick}
      ref={selectRef}
    >
      <div className={styles.selected}>
        <Image
          src={selectedLang?.flag || "/img/en.svg"}
          alt="flag"
          width={30}
          height={30}
        />
        <span className={styles.arrow}></span>
      </div>
      {isOpened ? (
        <div className={styles.dropdown}>
          {languages
            .filter((lang) => lang.code !== selectedLanguage)
            .map((lang, index) => (
              <div
                key={index}
                className={styles.item}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <Image src={lang.flag} alt="flag" width={30} height={30} />
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );
};

export default LanguageSelect;
