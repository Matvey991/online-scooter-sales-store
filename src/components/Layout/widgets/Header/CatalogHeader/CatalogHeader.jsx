import React from "react";
import styles from "./CatalogHeader.module.css";

export const CatalogHeader = () => {
  return (
    <div className={styles.catalogSection}>
      <div className={styles.catalogSection1}>
        <button className={styles.CatalogButtonsSamokat}>
          <img
            src="/electric-scooter 1.svg"
            alt="."
            className={styles.CatalogIcons}
          />
          Электросамокаты
        </button>
        <button className={styles.CatalogButtonsScooter}>
          <img src="/scooter-2.svg" alt="." className={styles.CatalogIcons} />
          Электроскутеры
        </button>
        <i>
          <button className={styles.CatalogButtonsBicycles}>
            <img
              src="/mountain-bike.svg"
              alt="."
              className={styles.CatalogIcons}
            />
            Электровелосипеды
          </button>
        </i>
        <button className={styles.CatalogButtonsVacuumCleaners}>
          <img
            src="/vacuum-cleaner 1.svg"
            alt="."
            className={styles.CatalogIcons}
          />
          Робот-пылесосы
        </button>
        <button className={styles.CatalogButtonsScales}>
          <img
            src="/weighing-scale.svg"
            alt="."
            className={styles.CatalogIconsScales}
          />
          Весы
        </button>
      </div>
      <div className={styles.catalogSection2}>
        <div className={styles.CatalogHeading}>
          <h2>Особенности</h2>
        </div>
      </div>
    </div>
  );
};
