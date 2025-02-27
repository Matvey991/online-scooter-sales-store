import styles from './SectionNavLover.module.css'
import { Button } from "shared/ui/Button/Button";

export function SectionNavLover() {
    return (
        <div className={styles.mainLineButtons}>
            <div className={styles.mainLineButtonsContainer}>
                <Button className={styles.mainLineButton}>О магазине</Button>
                <div className={styles.mainButtonsSpecial}>
                    <Button className={styles.mainLineButtonSpec}>
                        Доставка и оплата
                    </Button>
                    <Button className={styles.mainLineButtonSpecial}>
                        Доступна рассрочка
                    </Button>
                </div>
                <Button className={styles.mainLineButton}>Тест-драйв</Button>
                <Button className={styles.mainLineButton}>Блог</Button>
                <Button className={styles.mainLineButton}>Контакты</Button>
                <div className={styles.mainLineIconAndButton}>
                    <Button className={styles.mainLineButtonSpecialAndIcon}>
                        Акции
                    </Button>
                    <img src="/Group.svg" alt="." className={styles.mainLineIcon} />
                </div>
            </div>
        </div>
    )
}