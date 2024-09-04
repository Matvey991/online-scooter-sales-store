import styles from './main.module.css'
import {ReactComponent as Samokat} from '../../helpers/samokat.svg'
const Main = () => {
    return (
      <>
        <main className={styles.main}>
            <div className={styles.mainLine}>
              <div className={styles.mainLineButtons}>
                <div className={styles.mainLineButtonsContainer}>
                  <button className={styles.mainLineButton}>О магазине</button>
                  <div className={styles.mainButtonsSpecial}>
                  <button className={styles.mainLineButtonSpec}>Доставка и оплата</button>
                  <button className={styles.mainLineButtonSpecial}>Доступна рассрочка</button>
                  </div>
                  <button className={styles.mainLineButton}>Тест-драйв</button>
                  <button className={styles.mainLineButton}>Блог</button>
                  <button className={styles.mainLineButton}>Контакты</button>
                  <button className={styles.mainLineButton}>Акции</button>
                </div>
              </div>
            </div>
        </main>
      </>
    );
};

export default Main;