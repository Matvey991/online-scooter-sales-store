import styles from './Header.module.css'
import {ReactComponent as Viber} from '../../helpers/viber.svg'
import {ReactComponent as Tg} from '../../helpers/tg.svg'
import {ReactComponent as What} from '../../helpers/what.svg'
import {ReactComponent as Number} from '../../helpers/numbers.svg'
import {ReactComponent as Vector} from '../../helpers/Vector.svg'
import {ReactComponent as Shopping} from '../../helpers/shopping.svg'
import {ReactComponent as Heart} from '../../helpers/Heart.svg'
import {ReactComponent as Balance} from '../../helpers/balance.svg'



export const Header = () => {
    return (
        <>
<header>
<div className={styles.header}>
<div className={styles.container}>
<button>Сервис</button>
<button>Сотрудничество</button>
<button>Заказать звонок</button>
<ul>
<li><Viber/></li>
<li><Tg/></li>
<li><What/></li>
</ul>
<a className={styles.headerNumber} href='#!'>+7 (800) 505-54-61</a>
<ul>
<li><Number/></li>
</ul>
</div>
</div>
</header>
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
        <div className={styles.sectionLogo}>
        <Balance/>
        <Heart/>
        <Shopping/>
        </div>
        </div>
        </section>
</>

    )
}