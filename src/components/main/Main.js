import styles from './main.module.css'
import {ReactComponent as Rectangle} from '../../helpers/Rectangle.svg'
import {ReactComponent as Samokat} from '../../helpers/samokat.svg'
const Main = () => {
    return (
        <>
         <main>
            <div className={styles.mainBackround}>
        <img className={styles.mainBackroundPhoto} src='https://sun9-74.userapi.com/impg/BIFHu_eSHotwMQSrWBe-W1IHlv67wa__gJvvNg/pzE6oMxAv2o.jpg?size=1380x421&quality=95&sign=d8beb7a4e3a470aa40d19fdfaeec163e&type=album'/>
        <Samokat/>
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