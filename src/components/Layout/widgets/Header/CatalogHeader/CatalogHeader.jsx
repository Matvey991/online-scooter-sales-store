import React from "react";
import styles from "./CatalogHeader.module.css";

export const CatalogHeader = () => {
  return (
    <div className={styles.catalogSection}>
      <div className={styles.catalogSection1}>
        <button className={styles.CatalogButtons}>
          <img
            src="/electric-scooter.svg"
            alt="."
            className={styles.CatalogIcons}
          />
          Электросамокаты
        </button>
        <button className={styles.CatalogButtons}>
          <img src="/scooter-2.svg" alt="." className={styles.CatalogIcons} />
          Электроскутеры
        </button>
        <i>
          <button className={styles.CatalogButtons}>
            <img
              src="/mountain-bike.svg"
              alt="."
              className={styles.CatalogIcons}
            />
            Электровелосипеды
          </button>
        </i>
        <button className={styles.CatalogButtons}>
          <img
            src="/vacuum-cleaner 1.svg"
            alt="."
            className={styles.CatalogIcons}
          />
          Робот-пылесосы
        </button>
        <button className={styles.CatalogButtons}>
          <img
            src="/weighing-scale.svg"
            alt="."
            className={styles.CatalogIcons}
          />
          Весы
        </button>
      </div>
    </div>
  );
};
