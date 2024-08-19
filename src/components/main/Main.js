import styles from './main.module.css'
import {ReactComponent as Samokat} from '../../helpers/samokat.svg'
const Main = () => {
    return (
        <>
         <main className={styles.bolockMain}>
            <div className={styles.mainBackround}>
                <img lassName={styles.samokatMain} src='https://sun9-64.userapi.com/impg/jlcdJogk4wHfuTnhYN_XZDZG-w9E5LIzjV-Kcw/GGn43eHRr2U.jpg?size=538x405&quality=95&sign=8b8bb6f7023583e7aaef6e926f049362&type=album'/>
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
            <div className={styles.mainButtonBack}>
            <button className={styles.mainHeadingButton}>
            Перейти в католог
            </button>
            </div>
            </div>
        </main>   
        </>
    );
};

export default Main;