import { Link } from "react-router-dom";
import styles from "./SearchHeader.module.css";
import { RoutePath } from "../../../../../../shared/consts/router";
import { memo } from "react";

export interface SearchHeaderProps {
  cal?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  catalog?: boolean
}

export const SearchHeader = memo((props: SearchHeaderProps) => {

    const { cal } = props
  
    return (
        <section className={styles.section}>
            <div className={styles.sectionHeading}>
                <Link to={'/'} className={styles.sectionHeadingText}>KUGOO</Link>
            </div>
            <div className={styles.sectionnButton}>
                <button onClick={cal} className={styles.sectionButtonText}>
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
                <button className={styles.IconButtonBasket}>
                    <img src="/Balance.svg" alt="." />
                </button>
                <button className={styles.IconButtonBasket}>
                    <img src="/Heart.svg" alt="." />
                </button>
                <Link to={RoutePath.basket} className={styles.IconButtonBasket}>
                    <img src="/Shopping.svg" alt="." />
                </Link>
                <span>
                    <div className={styles.divParagraphBasket}>
                        <Link to={RoutePath.basket} className={styles.ParagraphBasket}>Корзина</Link>
                    </div>
                </span>
            </div>
        </section>
    );
});
