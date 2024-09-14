import {ReactComponent as Samokat} from '../../..//helpers/samokat.svg'
import {ReactComponent as Group} from '../../../helpers/Group.svg'
import {ReactComponent as Rectangle} from '../../../helpers/Rectangle.svg'
import {ReactComponent as Kirin} from '../../../helpers/kirin.svg'
import styles from './main.module.css'

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
              <div className={styles.mainBackroundFoneELements}>
            <article className={styles.mainBackround}>
              <p className={styles.mainElemetnsNewText}>Новинка</p>
              <h2 className={styles.mainHeading}>ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN <br/> ОТ ОФИЦИАЛЬНОГО ДИЛЕРА</h2>
              <p className={styles.mainBackroundDelivery}>с бесплатной доставкой по РФ от 1 дня</p>
              <button className={styles.mainBackroundButtonCatalog}>Перейти в католог</button>
              <div className={styles.mainBackroundParagraph}>
                <Kirin className={styles.mainBackroundParagraphText}/>
              </div>
              <div className={styles.mainBackroundElements}>
              <Samokat className={styles.mainBackroundFoto}/>
              </div>
            </article>
            </div>
              </div>
        </main>
      </>
    );
};

export default Main;