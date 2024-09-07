import styles from './main.module.css'
import {ReactComponent as Samokat} from '../../helpers/samokat.svg'
import {ReactComponent as Group} from '../../helpers/Group.svg'
import {ReactComponent as Rectangle} from '../../helpers/Rectangle.svg'
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
                  <div className={styles.mainLineIconAndButton}>
                  <button className={styles.mainLineButtonSpecialAndIcon}>Акции</button>
                  <Group className={styles.mainLineIcon}/>
                  </div>
                </div>
              </div>
              <div className={styles.mainBackround}>
                <Rectangle className={styles.mainBackroundFone}/>
                <div className={styles.mainBackroundElements}>
                  <div className={styles.mainSamokat}>
                    <Samokat className={styles.mainSamokatFoto}/>
                </div>
                </div>
              </div>
            </div>
        </main>
      </>
    );
};

export default Main;