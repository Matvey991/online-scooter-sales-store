import styles from "./Header.module.css";
import { SearchHeader } from "./SearchHeader/SearchHeader";
import { useState } from "react";
import { CatalogHeader } from "./CatalogHeader/CatalogHeader";

export const Header = () => {
  const [catalog, setCatalog] = useState(true);

  function cal() {
    setCatalog((prev) => !prev);
  }

  return (
    <header>
      <div className={styles.topButtons}>
        <div className={styles.topButtonsContainer}>
          <div className={styles.headerLeft}>
            <button className={styles.headerLeftButton}>Сервис</button>
            <button className={styles.headerLeftButton}> Сотрудничество</button>
            <button className={styles.headerLeftButton}>Заказать звонок</button>
            <div className={styles.headerLeftIcon}>
              <img src="/Viber.svg" alt="." className={styles.viber} />
              <img src="/What.svg" alt="." />
              <img src="/Tg.svg" alt="." />
            </div>
          </div>
          <div className={styles.headerRight}>
            <a href="tel:88005055461" className={styles.headerRightButton}>
              +7 (800) 505-54-61
            </a>
            <img src="/Numbers.svg" alt="." />
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.SearchHeader}>
        <SearchHeader catalog={catalog} cal={cal} />
        {catalog ? <CatalogHeader /> : null}
      </div>
    </header>
  );
};
