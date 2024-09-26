import styles from "./Header.module.css";
import { ReactComponent as Viber } from "../../../helpers/icons/viber.svg";
import { ReactComponent as Tg } from "../../../helpers/icons/tg.svg";
import { ReactComponent as What } from "../../../helpers/icons/what.svg";
import { ReactComponent as Number } from "../../../helpers/icons/numbers.svg";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
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
      </header>
      <hr className={styles.hr} />
    </>
  );
};
