import styles from '../../styles/Scheme/DirectionsItem.module.scss'
import item from '../../styles/Scheme/ItemContent.module.scss'

export default function DirectionsItem({params}) {
    return (
        <div className={styles.directions__item}>
            {params.hasImg && 
                <div className={styles.item__icon}>
                    <div className={styles.icon__text}>{params.id}</div>
                    <img className={styles.icon__image} src="./inhaler.svg" alt="" />
                </div>
            }
            <div className={item.item__title} dangerouslySetInnerHTML={{__html: params.title}}/>
            <div className={item.item__text} dangerouslySetInnerHTML={{__html: params.text}}/>
        </div>
    )
}