// Componentes começar com letra Maiúscula para diferenciar de tag HTML
import styles from './Header.module.css'

export function Header() {
    return(
        <strong className={styles.header}> Ignite Feed</strong>
    )
}