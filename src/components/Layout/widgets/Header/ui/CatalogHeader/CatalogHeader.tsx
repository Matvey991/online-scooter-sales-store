import React, { memo } from "react";
import styles from "./CatalogHeader.module.css";

export const CatalogHeader = memo(() => {
    return (
        <div className={styles.catalogSection}>
            <div className={styles.catalogSection1}>
                <button>
                    <img
                        src="/electric-scooter 1.svg"
                        alt="."
                        className={styles.CatalogIcons}
                    />
                    Электросамокаты
                </button>
                <button>
                    <img src="/scooter-2.svg" alt="." className={styles.CatalogIcons} />
                    Электроскутеры
                </button>
                <button className={styles.CatalogIcons}>
                    <img src="/mountain-bike.svg" alt="." />
                    Электровелосипеды
                </button>
                <button>
                    <img
                        src="/vacuum-cleaner 1.svg"
                        alt="."
                        className={styles.CatalogIcons}
                    />
                    Робот-пылесосы
                </button>
                <button>
                    <img
                        src="/weighing-scale.svg"
                        alt="."
                        className={styles.CatalogIconsScales}
                    />
                    Весы
                </button>
            </div>
            <div className={styles.catalogSection2}>
                <div className={styles.CatalogHeading}></div>
                <h2>Особенности</h2>
                <button>Внедорожный</button>
                <button>Городской</button>
                <button>Зимний</button>
                <button>С сиденьем</button>
                <button>Без сиденья</button>
            </div>
            <div className={styles.catalogSection3}>
                <h2>Для кого</h2>
                <button>Для детей и подростков</button>
                <button>Для взрослых</button>
                <button>Для пенсионеров</button>
            </div>
        </div>
    );
});
