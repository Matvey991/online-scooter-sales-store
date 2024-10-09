import styles from "./Header.module.css";
import { ReactComponent as Viber } from "../../../helpers/icons/viber.svg";
import { ReactComponent as Tg } from "../../../helpers/icons/tg.svg";
import { ReactComponent as What } from "../../../helpers/icons/what.svg";
import { ReactComponent as Number } from "../../../helpers/icons/numbers.svg";
import { SearchHeader } from "./SearchHeader/SearchHeader";
import { useState } from "react";
import CatalogHeader from "./CatalogHeader/CatalogHeader";

export const Header = () => {
  const [catalog, setCatalog] = useState(true);

  function cal() {
    setCatalog((prev) => !prev);
    console.log(catalog);
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
              <Viber />
              <What />
              <Tg />
            </div>
          </div>
          <div className={styles.headerRight}>
            <a href="tel:88005055461" className={styles.headerRightButton}>
              +7 (800) 505-54-61
            </a>
            <Number />
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
