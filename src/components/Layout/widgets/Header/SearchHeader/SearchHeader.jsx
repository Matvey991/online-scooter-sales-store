import styles from "./SearchHeader.module.css";

export const SearchHeader = ({ cal }) => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionHeadingText}>KUGOO</h2>
        </div>
        <div className={styles.sectionnButton}>
          <button onClick={() => cal()} className={styles.sectionButtonText}>
            Каталог
          </button>
        </div>
        <form className={styles.FormSearch}>
          <div className={styles.SearchBlock}>
            <div className={styles.ButtonDropMenuText}>
              <select className={styles.ButtonDropMenuText}>
                <option value="Everywhere">Везде</option>
                <option>Заглушка</option>
              </select>
            </div>
            <div className={styles.SearchInput}>
              <input
                className={styles.SearchInputText}
                type="text"
                placeholder="Искать самокат KUGO"
              ></input>
            </div>
            <div className={styles.sectionLupa}>
              <button className={styles.LupaButton}>
                <img src="/Vector.svg" alt="." />
              </button>
            </div>
          </div>
        </form>
        <div className={styles.basketIcon}>
          <a className={styles.IconButtonBasket} href="!">
            <img src="/Balance.svg" alt="." />
          </a>
          <a className={styles.IconButtonBasket} href="!">
            <img src="/Heart.svg" alt="." />
          </a>
          <a className={styles.IconButtonBasket} href="!">
            <img src="/Shopping.svg" alt="." />
          </a>
          <div className={styles.divParagraphBasket}>
            <button className={styles.ParagraphBasket}>Корзина</button>
          </div>
        </div>
      </section>
    </>
  );
};
