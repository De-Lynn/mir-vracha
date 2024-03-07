import DangerItem from '../components/DangerItem'
import styles from '../styles/danger.module.scss'

const list = [
    {id: 1, img: '/danger1.svg', percent: '45,5%', title: 'сердечной недостаточностью1', text: 'Популяционное когортное исследование (N=385)'},
    {id: 2, img: '/danger2.svg', percent: '55,3%', title: 'инфарктом миокарда1', text: 'Апостериорный анализ когортного исследования (N=2887)'},
    {id: 3, img: '/danger3.svg', percent: '50,5%', title: 'раком мочевого пузыря', text: 'Исследование Национальной статистической службы (N=42642)'},
]

const Danger = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.text__paragraph}>
                    <span className={styles.bold}>
                        Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
                        одно среднетяжелое или тяжелое обострение случится в течение 3 лет 
                        у 77% пациентов<sup>1</sup>.
                    </span>
                </div>
                <div className={styles.text__paragraph}>
                    В течение 5 лет после первого тяжёлого обострения в живых остаются только 
                    40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым 
                    при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных 
                    опухолях.
                </div>
            </div>
            <div className={styles.title}>
                Пятилетняя выживаемость пациентов
            </div>
            <div className={styles.list}>
                <DangerItem params={list[0]}>
                    сердечной недостаточностью<sup>1</sup>
                </DangerItem>
                <DangerItem params={list[1]}>
                    инфарктом миокарда<sup>1</sup>
                </DangerItem>
                <DangerItem params={list[2]}>
                    раком мочевого пузыря
                </DangerItem>
            </div>
        </div>
    )
}

export default Danger