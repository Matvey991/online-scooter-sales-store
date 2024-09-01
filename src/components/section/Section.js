import styles from './Section.module.css'
import {ReactComponent as Vector} from '../../helpers/Vector.svg'
import {ReactComponent as Shopping} from '../../helpers/shopping.svg'
import {ReactComponent as Heart} from '../../helpers/Heart.svg'
import {ReactComponent as Balance} from '../../helpers/balance.svg'
import {ReactComponent as Group} from '../../helpers/Group.svg'


const Section = () => {
    return (
        <>
        <section className={styles.section}>
             <div className={styles.sectionHeading}> 
                    <h2 className={styles.sectionHeadingText}>KUGGO</h2>
            </div>
                <div className={styles.sectionnButton}>
                    <button className={styles.sectionButtonText}>Каталог</button>
                </div>
                <div className={styles.sectionSearchBlock}>
                    <div className={styles.sectionButtonDropMenu}>
                <select className={styles.sectionButtonDropMenuText}>
                    <option selected>Везде</option>
                    <option>Заглушка</option>
                </select>
                    </div>
                <div className={styles.sectionSearchInput}>
                <input className={styles.sectionSearchInputText} type='text' placeholder='Искать самокат KUGO'></input>
                </div>
                <div className={styles.mainMagnifier}>
                <button className={styles.sectionLupaButtonF}><Vector/></button>
                </div>
                </div>
                <div className={styles.sectionIconPadding}>
                <div className={styles.sectionIcon}>
                    <button><Balance/></button>
                    <button><Heart/></button>
                    <div className={styles.sectionIconBasket}>
                    <button><Shopping/></button>
                        <p>Корзина</p>
                    </div>
                </div>
                </div>
        </section>
        </>
    );
};

export default Section;