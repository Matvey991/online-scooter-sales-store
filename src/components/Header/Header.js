import styles from './Header.module.css'
import {ReactComponent as Viber} from '../../helpers/viber.svg'
import {ReactComponent as Tg} from '../../helpers/tg.svg'
import {ReactComponent as What} from '../../helpers/what.svg'
import {ReactComponent as Number} from '../../helpers/numbers.svg'


export const Header = () => {
    return (
        <>
<header className={styles.header}>
<div className={styles.headerLeft}>
        <button className={styles.headerLeftButton}>Сервис</button>
        <button className={styles.headerLeftButton}> Сотрудничество</button>
        <button className={styles.headerLeftButton}>Заказать звонок</button>
</div>
<div className={styles.headerRight}>
<div className={styles.headerGlav}>
        <a href='tel:88005055461' className={styles.headerRightButton}>+7 (800) 505-54-61</a>
</div>
    </div>
</header>
</>
    )
}