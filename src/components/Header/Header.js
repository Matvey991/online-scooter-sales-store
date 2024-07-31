import { HeaderTop } from "./HeaderTopBlock"
import styles from './Header.module.css'
import { HeaderMenu } from "../HeaderMenu/HeaderMenu"

export const Header = () => {
    return (
<div className={styles.header}>
    <HeaderTop/>
    <HeaderMenu/>
</div>
    )
}