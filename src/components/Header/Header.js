import styles from './Header.module.css'
import {ReactComponent as Viber} from '../../helpers/viber.svg'
import {ReactComponent as Tg} from '../../helpers/tg.svg'
import {ReactComponent as What} from '../../helpers/what.svg'
import {ReactComponent as Number} from '../../helpers/numbers.svg'


export const Header = () => {
    return (
    <div className={styles.container}>
<header>
<div className={styles.header}>
    <div className={styles.headerTextConten}>
<span className={styles.headerTextConten}>Сервис</span>
<span className={styles.headerTextContent}>Сотрудничество</span>
<span className={styles.headerTextContent}>Заказать звонок</span>
    </div>
    <div className={styles.headerLogo}>
        <div className={styles.headerLogoContent}>
<Viber/>
<What/>
<Tg/>
    </div>
        </div>
    </div>
</header>
<main>
    
</main>
    </div>
    )
}