import { ScooterItem } from "../model/types/scooterItem";
import styles from "./SectionScooterItem.module.css";

interface SectionScooterItemProps {
  el: ScooterItem
}

export const SectionScooterItem = (props: SectionScooterItemProps) => {

  const {el} = props
  
  return (
    <div className={styles.SectionScooterItem}>
    <div className={styles.card}>
      <div className={styles.backroundImg}>
        <img src={el.image} className={styles.imgScooter} alt="." />
        <div className={styles.balance}>
          <img src="/balance 2.svg" alt="." />
        </div>
        {el.status === "new" ? (
          <p className={styles.hit}>Хит</p>
        ) : (
          <p className={styles.novik}>Новинка</p>
        )}
      </div>
      <hr className={styles.hr} />
      <p className={styles.name}>{el.name}</p>
      <hr className={styles.hr} />
      <div className={styles.information}>
        <div className={styles.informationRight}>
          <p>
            <img
              src="/Accumulator.svg"
              alt="."
              className={styles.informationIcons}
            />
            {`${el.battery} mAh`}
          </p>
          <p>
            <img src="/Power.svg" alt="." className={styles.informationIcons} />
            {`${el.power} л.с`}
          </p>
        </div>
        <div className={styles.informationLeft}>
          <p className={styles.speed}>
            {" "}
            <img
              src="/Speedometer.svg"
              alt="."
              className={styles.informationIcons}
            />
            {`${el.speed} км/ч`}
          </p>
          <p>
            <img src="/Timer.svg" alt="." className={styles.informationIcons} />
            {`${el.times / 60} часов`}
          </p>
        </div>
      </div>
      <div className={styles.priceCard}>
        <p className={styles.falsePrice}>{el.falsePrice}</p>
        <p className={styles.price}>{el.price}</p>
      </div>
      <div className={styles.addButtons}>
        <div className={styles.addToCartButton}>
          <img src="/shopping-cart-2.svg" alt="." />
        </div>
        <div className={styles.theAddToFavoritesButton}>
          <img src="/Heart — копия.svg" alt="." />
        </div>
      </div>
      <div className={styles.divBtnBuy}>
        <button className={styles.btnBuy}>Купить в 1 клик</button>
      </div>
    </div>
    </div>
  );
};
