import styles from '../styles/BlockTitle.module.scss'
import img from '../public/title-img.svg'

export default function BlockTitle({text}) {
    return (
        <div className={styles.block__title} style={{background: `url(${img.src}) no-repeat;`}}>
            <span className={styles.title__text}>{text}</span>
        </div>
    )
}