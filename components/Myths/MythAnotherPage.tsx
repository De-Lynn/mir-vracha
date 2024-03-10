import Link from 'next/link'
import styles from '../../styles/Myths/MythsList.module.scss'

export default function Myth({children, params, turning}) {
    return (
        <div className={styles.list__item + ' ' + styles.card__front}>
            <div className={styles.item__icon}>
                <img className={styles.icon__image} src={params.img} alt="" />
            </div>
            <div className={styles.item__title}>
                <div className={styles.title__text}>
                    {children}
                </div>
            </div>

            {/* при открытии на отдельной странице */}
            <div className={styles.item__content}>
                <div className={styles.content__text}>
                    {params.text}
                </div>
                <div className={styles.content__effect}></div>
            </div>

            {!turning &&
                <Link href={params.link}>
                    <button className={`${styles.item__button} ${styles[params.btnColor]}`}>
                        <img className={styles.button__image} src="/mir-vracha/pointer.svg" alt="" />
                    </button>
                </Link>
            }
        </div>
    )
}