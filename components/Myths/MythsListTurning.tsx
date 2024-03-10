import { useState } from 'react'
import Danger from '../../pages/danger'
import Distribution from '../../pages/distribution'
import styles from '../../styles/Myths/MythsList.module.scss'
import Myth from './MythAnotherPage'

const list = [
    {id: 1, img: '/myth-icon1.svg', btnColor: 'blue', link: '/distribution', text: 'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...',},
    {id: 2, img: '/myth-icon2.svg', btnColor: 'green', link: '/danger', text: 'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...',}
]

export default function MythsList() {
    const [rotated, setRotated] = useState({1: false, 2: false})

    return (
        <div className={styles.block__list}>
            <div className={styles.card + (rotated[1] ? (' ' + styles.rotated) : '')}>
                <Myth params={list[0]} turning={true}>
                    ХОБЛ болеют
                    <span className={styles.title__text + ' ' + styles.bold}> преимущественно мужчины?</span>
                </Myth>

                <Distribution btnColor={list[0].btnColor} turning={true}/>
                <button className={`${styles.item__button} ${styles[list[0].btnColor]}`}
                    onClick={() => setRotated({...rotated, 1:!rotated[1]})}
                >
                    <img className={styles.button__image} src="/pointer.svg" alt="" />
                </button>
            </div>

            <div className={styles.card + (rotated[2] ? (' ' + styles.rotated) : '')}>
                <Myth params={list[1]} turning={true}>
                    <span className={styles.title__text + ' ' + styles.bold}>Опасно </span>
                    не наличие заболевания, а обострения?
                </Myth>

                <Danger btnColor={list[1].btnColor} turning={true}/>
                <button className={`${styles.item__button} ${styles[list[1].btnColor]}`}
                    onClick={() => setRotated({...rotated, 2:!rotated[2]})}
                >
                    <img className={styles.button__image} src="/pointer.svg" alt="" />
                </button>
            </div>
            
            
        </div>
    )
}