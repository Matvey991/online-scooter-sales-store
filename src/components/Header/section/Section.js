import styles from './Section.module.css'
import {ReactComponent as Vector} from '../../../helpers/Vector.svg'
import {ReactComponent as Shopping} from '../../../helpers/shopping.svg'
import {ReactComponent as Heart} from '../../../helpers/Heart.svg'
import {ReactComponent as Balance} from '../../../helpers/balance.svg'
import {ReactComponent as Group} from '../../../helpers/Group.svg'


const Section = () => {
    return (
        <>
          <section>
    <div className={styles.section}>
        <div className={styles.sectionH2}>
            <div className={styles.sectionMenu}>
        <h2>
        Kugoo
        </h2>
    </div>
    </div>
        <button className={styles.sectionButton}>Каталог</button>
            <div className={styles.sectionSearchText}>
        <button className={styles.sectionButtonSearch}>Везде</button>
        <input className={styles.sectionSearch} placeholder='Искать самокат KUGO'></input>
        </div>
        <button className={styles.sectionLupa}><Vector className={styles.Lupa}/></button>
        <div className={styles.sectionIcon}>
        <div className={styles.sectionLogo}>
      <a href='#'>  <Balance className={styles.sectionLogo}/></a>
      <a href='#'>  <Heart className={styles.sectionLogo}/></a>
      <a href='#'>  <Shopping className={styles.sectionLogo}/></a>
      <a href='#' className={styles.sectionLogoButton}>Корзина</a>
        </div>
        </div>
        </div>
        <div className={styles.sectionDown}>
            <div className={styles.sectionDownMenu}>
        <a href='#' className={styles.sectionHeadingDown}>О магазине</a>
        <a href='#' className={styles.sectionHeadingDown}>Доставка и оплата</a> 
        <div className={styles.sectionButtonDown}>
            <div className={styles.sectionButtonDow}>
        <button className={styles.sectionButtonDow}>Доступна рассрочка</button>
        </div>
        </div>
        <a href='#' className={styles.sectionHeadingDown}>Тест-драйв</a>
        <a href='#' className={styles.sectionHeadingDown}>Блог</a>
        <a href='#' className={styles.sectionHeadingDown}>Контакты</a>
        <a href='#' className={styles.sectionHeadingDown}>Акции</a>
        <div className={styles.sectionDownLogo}>
        <a href='#'><Group/></a>
        </div>
        </div>
        </div>
        </section>  
        </>
    );
};

export default Section;