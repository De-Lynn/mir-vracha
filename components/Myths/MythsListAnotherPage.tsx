import styles from '../../styles/Myths/MythsList.module.scss'
import Myth from './MythAnotherPage'

const list = [
    {id: 1, img: './myth-icon1.svg', btnColor: 'blue', link: '/distribution', 
        text: 'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...',
        title: `ХОБЛ болеют <b>преимущественно мужчины?</b>`
    },
    {id: 2, img: './myth-icon2.svg', btnColor: 'green', link: '/danger', 
        text: 'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...',
        title: `<b>Опасно</b> не наличие заболевания, а обострения?`
    }
]

export default function MythsList() {
    return (
        <div className={styles.block__list}>
            {list.map(el => <Myth params={el} turning={false}/>)}
        </div>
    )
}