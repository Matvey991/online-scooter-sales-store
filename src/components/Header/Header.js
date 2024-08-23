import styles from './Header.module.css'
import {ReactComponent as Viber} from '../../helpers/viber.svg'
import {ReactComponent as Tg} from '../../helpers/tg.svg'
import {ReactComponent as What} from '../../helpers/what.svg'
import {ReactComponent as Number} from '../../helpers/numbers.svg'


export const Header = () => {
    return (
<header>
<div className={styles.header}>
<div className={styles.container}>
<button className={styles.headerButton}>Сервис</button>
<button className={styles.headerButton}>Сотрудничество</button>
<button className={styles.headerButton}>Заказать звонок</button>
<ul>
<li><Viber/></li>
<li><Tg/></li>
<li><What/></li>
</ul>
<a className={styles.headerNumber} href='tel: +7 (800) 505-54-61'>+7 (800) 505-54-61</a>
<ul>
<li><Number/></li>
</ul>
</div>
</div>
</header>
    )
}