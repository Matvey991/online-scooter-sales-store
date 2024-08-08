import styles from './main.module.css'
import {ReactComponent as Rectangle} from '../../helpers/Rectangle.svg'
const Main = () => {
    return (
        <>
         <main>
            <div className={styles.mainBackround}>
            <Rectangle/>
            </div>
            <div className={styles.mainButtonAbove}>
            <button className={styles.mainButton}>Новинка</button>
            </div>
        </main>   
        </>
    );
};

export default Main;