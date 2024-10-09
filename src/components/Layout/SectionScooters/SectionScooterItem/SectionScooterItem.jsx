import styles from "./styles.module.css";
import { ReactComponent as Accumulator } from "../../../../helpers/icons/Accumulator.svg";
import { ReactComponent as Timer } from "../../../../helpers/icons/Timer.svg";
import { ReactComponent as Power } from "../../../../helpers/icons/Power.svg";
import { ReactComponent as Speedometer } from "../../../../helpers/icons/Speedometer.svg";

export const SectionScooterItem = ({ el }) => {
  return (
    <div className={styles.card}>
      <div className={styles.backroundImg}>
        <img src={el.image} className={styles.imgScooter} alt="." />
      </div>
      <hr className={styles.hr} />
      <p className={styles.name}>{el.name}</p>
      <hr className={styles.hr} />
      <div className={styles.information}>
        <div className={styles.informationRight}>
          <p>
            <Accumulator className={styles.informationIcons} />
            {`${el.battery} mAh`}
          </p>
          <p>
            <Power className={styles.informationIcons} />
            {`${el.power} л.с`}
          </p>
        </div>
        <div className={styles.informationLeft}>
          <p className={styles.speed}>
            {" "}
            <Speedometer className={styles.informationIcons} />{" "}
            {`${el.speed} км/ч`}
          </p>
          <p>
            <Timer className={styles.informationIcons} />
            {`${el.times / 60} часов`}
          </p>
        </div>
      </div>
      <div className={styles.priceCard}>
        <p className={styles.falsePrice}>{el.falsePrice}</p>
        <p className={styles.price}>{el.price}</p>
      </div>
      <div className={styles.divBtnBuy}>
        <button className={styles.btnBuy}>Купить в 1 клик</button>
      </div>
    </div>
  );
};
