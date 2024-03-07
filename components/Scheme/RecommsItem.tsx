import styles from '../../styles/Scheme/RecommsItem.module.scss'

export default function RecommsItem({children}) {
    return (
        <div className={styles.recomms__item}>
            <div className={styles.item__text}>
                {children}
            </div>
        </div>
    )
}