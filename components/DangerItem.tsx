import styles from '../styles/DangerItem.module.scss'

export default function DangerItem({children, params}) {
    return (
        <div className={styles.wrapper}>
            <img src={params.img} alt="" />
            <div className={styles.percent + ' ' + styles.bold}>
                {params.percent}
            </div>
            <div className={styles.title}>
                пациентов с <span className={styles.bold}>{children}</span>
            </div>
            <div className={styles.text}>
                {params.text}
            </div>
        </div>
    )
}