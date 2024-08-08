import styles from './main.module.css'
import {ReactComponent as Rectangle} from '../../helpers/Rectangle.svg'
import {ReactComponent as Samokat} from '../../helpers/samokat.svg'
const Main = () => {
    return (
        <>
         <main>
            <div className={styles.mainBackround}>
            <Rectangle/> 
            <Samokat className={styles.mainSamokat}/>
            </div>
            <div className={styles.mainButtonAbove}>
            <button className={styles.mainButton}>Новинка</button>
            </div>
            <div className={styles.mainDownHeading}>
            <h1 className={styles.mainHeading}>
            Электросамокаты Kugoo Kirin<br/> от официального дилера
            </h1>
            <div className={styles.mainParagraph}>
            <p>с бесплатной доставкой по РФ от 1 дня</p>
            </div>
            </div>
        </main>   
        </>
    );
};

export default Main;