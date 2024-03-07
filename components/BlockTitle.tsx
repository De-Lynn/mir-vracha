import styles from '../styles/BlockTitle.module.scss'

export default function BlockTitle({text}) {
    return (
        <div className={styles.block__title}>
            <span className={styles.title__text}>{text}</span>
        </div>
    )
}