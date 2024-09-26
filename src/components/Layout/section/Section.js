import styles from "./Section.module.css";
import { ReactComponent as Vector } from "../../..//helpers/icons/Vector.svg";
import { ReactComponent as Shopping } from "../../../helpers/icons/shopping.svg";
import { ReactComponent as Heart } from "../../../helpers/icons/Heart.svg";
import { ReactComponent as Balance } from "../../../helpers/icons/balance.svg";

const Section = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionHeadingText}>KUGOO</h2>
        </div>
        <div className={styles.sectionnButton}>
          <button className={styles.sectionButtonText}>Каталог</button>
        </div>
        <form className={styles.sectionFormSearch}>
          <div className={styles.sectionSearchBlock}>
            <div className={styles.sectionButtonDropMenu}>
              <select className={styles.sectionButtonDropMenuText}>
                <option value="Everywhere">Везде</option>
                <option>Заглушка</option>
              </select>
            </div>
            <div className={styles.sectionSearchInput}>
              <input
                className={styles.sectionSearchInputText}
                type="text"
                placeholder="Искать самокат KUGO"
              ></input>
            </div>
            <div className={styles.sectionLupa}>
              <button className={styles.sectionLupaButton}>
                <Vector />
              </button>
            </div>
          </div>
        </form>
        <div className={styles.sectionIcon}>
          <a className={styles.sectionIconButtonText} href="!">
            <Balance />
          </a>
          <a className={styles.sectionIconButtonText} href="!">
            <Heart />
          </a>
          <a className={styles.sectionIconButtonText} href="!">
            <Shopping />
          </a>
          <div className={styles.sectionParagraphBasket}>
            <button className={styles.sectionParagraphBasketText}>
              Корзина
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
