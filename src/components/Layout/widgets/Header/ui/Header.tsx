import styles from "./Header.module.css";
import { useCatalog } from "../../../../useHooks/useCatalog/useCatalog";
import { memo } from "react";
import { SearchHeader } from "./SearchHeader/SearchHeader";
import { CatalogHeader } from "./CatalogHeader/CatalogHeader";

export const Header = memo(() => {
  const {catalog, onCatalog} = useCatalog()
  
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
        <SearchHeader cal={onCatalog} />
        {catalog ? <CatalogHeader /> : null}
      </div>
    </header>
  );
});
