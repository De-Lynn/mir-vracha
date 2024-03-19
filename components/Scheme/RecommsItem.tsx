import styles from '../../styles/Scheme/RecommsItem.module.scss'

export default function RecommsItem({params}) {
    return (
        <div className={styles.recomms__item}>
            <div className={styles.item__text} dangerouslySetInnerHTML={{__html:params.text}}/>
        </div>
    )
}