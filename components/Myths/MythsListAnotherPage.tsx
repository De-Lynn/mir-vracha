import styles from '../../styles/Myths/MythsList.module.scss'
import Myth from './MythAnotherPage'

const list = [
    {id: 1, img: '/mir-vracha/myth-icon1.svg', btnColor: 'blue', link: '/distribution', text: 'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...',},
    {id: 2, img: '/mir-vracha/myth-icon2.svg', btnColor: 'green', link: '/danger', text: 'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...',}
]

export default function MythsList() {
    return (
        <div className={styles.block__list}>
            <Myth params={list[0]} turning={false}>
                ХОБЛ болеют
                <span className={styles.title__text + ' ' + styles.bold}> преимущественно мужчины?</span>
            </Myth>

            <Myth params={list[1]} turning={false}>
                <span className={styles.title__text + ' ' + styles.bold}>Опасно </span>
                не наличие заболевания, а обострения?
            </Myth>
        </div>
    )
}