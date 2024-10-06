import styles from "./styles.module.css";

export const SectionScooterItem = ({ el }) => {
  return (
    <div className={styles.card}>
      <div className={styles.backroundImg}>
        <img src={el.image} className={styles.imgScooter} alt="." />
      </div>
      <h4>{el.name}</h4>
      <div className={styles.information}>
        <p>{`Батарея ${el.battery}`}</p>
        <p>{el.power}</p>
        <p>{`${el.speed} км/ч`}</p>
        <p>{`${el.times / 60} часов`}</p>
      </div>
      <div className={styles.priceCard}>
        <h4 className={styles.price}>{el.price}</h4>
      </div>
      <div className={styles.divBtnBuy}>
        <button className={styles.btnBuy}>Купить в 1 клик</button>
      </div>
    </div>
  );
};
