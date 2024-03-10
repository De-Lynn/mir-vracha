import styles from '../../styles/Scheme/DirectionsItem.module.scss'

export default function DirectionsItem({children, params}) {
    return (
        <div className={styles.directions__item}>
            {params.hasImg && 
                <div className={styles.item__icon}>
                    <div className={styles.icon__text}>{params.id}</div>
                    <img className={styles.icon__image} src="./inhaler.svg" alt="" />
                </div>
            }
            {children}
        </div>
    )
}