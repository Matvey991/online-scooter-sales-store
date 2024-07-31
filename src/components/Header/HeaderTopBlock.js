import styles from './styles.module.css'
import {ReactComponent as Viber} from '../../../src/helpers/viber.svg'
import {ReactComponent as What} from '../../../src/helpers/what.svg'
import {ReactComponent as Tg} from '../../../src/helpers/tg.svg'
import {ReactComponent as Numbers} from '../../../src/helpers/numbers.svg'

export const HeaderTop = () => {
    return (
        <div className={styles.headerTopBlock}>
        <div className={styles.header}>
    <div className={styles.headerTop}>
<a className={styles.headerTopBLockText}>Сервис</a>
<a className={styles.headerTopBLockText}>Сотрудничество</a>
<a className={styles.headerTopBLockText}>Заказать звонок</a>
<Viber/>
<What/>
<Tg/>
</div>
  </div>
<div className={styles.headerTopB}>
  <div className={styles.numbers}>
  <a className={styles.num}> +7 (800) 505-54-61</a>
   <Numbers/>
  </div>
  </div>
  </div>
    )
}