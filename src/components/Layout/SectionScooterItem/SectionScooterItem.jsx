import styles from "./styles.module.css";

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
        <div className={styles.informationLeft}>
          <p>{el.battery}</p>
          <p>{el.power}</p>
        </div>
        <div className={styles.informationRight}>
          <p className={styles.speed}>{`${el.speed} км/ч`}</p>
          <p>{`${el.times / 60} часов`}</p>
        </div>
      </div>
      <div className={styles.priceCard}>
        <p className={styles.price}>{el.price}</p>
      </div>
      <div className={styles.divBtnBuy}>
        <button className={styles.btnBuy}>Купить в 1 клик</button>
      </div>
    </div>
  );
};
