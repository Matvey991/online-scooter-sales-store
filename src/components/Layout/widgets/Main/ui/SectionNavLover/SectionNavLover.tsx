import React from "react";
import styles from './SectionNavLover.module.css'

export function SectionNavLover() {
    return (
<div className={styles.mainLineButtons}>
          <div className={styles.mainLineButtonsContainer}>
            <button className={styles.mainLineButton}>О магазине</button>
            <div className={styles.mainButtonsSpecial}>
              <button className={styles.mainLineButtonSpec}>
                Доставка и оплата
              </button>
              <button className={styles.mainLineButtonSpecial}>
                Доступна рассрочка
              </button>
            </div>
            <button className={styles.mainLineButton}>Тест-драйв</button>
            <button className={styles.mainLineButton}>Блог</button>
            <button className={styles.mainLineButton}>Контакты</button>
            <div className={styles.mainLineIconAndButton}>
              <button className={styles.mainLineButtonSpecialAndIcon}>
                Акции
              </button>
              <img src="/Group.svg" alt="." className={styles.mainLineIcon} />
            </div>
          </div>
        </div>
    )
}