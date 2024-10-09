import React from "react";
import styles from "./CatalogHeader.module.css";

const CatalogHeader = () => {
  return (
    <div>
      <section className={styles.catalogSection}>
        <div className={styles.catalogSection1}>
          <button>Электросамокаты</button>
          <button>Электроскутеры</button>
          <button>Электровелосипеды</button>
          <button>Робот-пылесосы</button>
          <button>Весы</button>
        </div>
      </section>
    </div>
  );
};

export default CatalogHeader;
