import styles from '../styles/distribution.module.scss'
import outer from '../styles/Myths/MythsList.module.scss'

const Distribution = ({btnColor, turning}) => {
    return (
        <div className={styles.wrapper + (turning ? (' ' + outer.card__back) : '')}>
            <div className={styles.text}>
                <div className={styles.text__paragraph}>
                    В десятилетнем исследовании 
                    <span className={styles.bold}> «Генетическая эпидемиология ХОБЛ» (COPDGene) </span>
                    среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено 
                    <span className={styles.bold}> преобладание женщин (66%)</span>, 
                    а в возрасте 60-64 лет количество женщин и мужчин.
                </div>
                <div className={styles.text__paragraph}>
                    Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано 
                    с тем, что дыхательные пути курящих женщин имеют более 
                    <span className={styles.bold}> высокий процент площади стенок</span>, но меньшую площадь просвета, 
                    внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.
                </div>
            </div>
            <img className={styles.img} src="./diagram.svg" alt="" />
        </div>
    )
}

export default Distribution