import React from "react";
import styles from "./CatalogHeader.module.css";

export const CatalogHeader = () => {
  return (
    <div className={styles.catalogSection}>
      <div className={styles.catalogSection1}>
        <button>Электросамокаты</button>
        <button>Электроскутеры</button>
        <button>Электровелосипеды</button>
        <button>Робот-пылесосы</button>
        <button>Весы</button>
      </div>
    </div>
  );
};
