import Image from "next/image"
import BlockTitle from "../components/BlockTitle"
import MythsList from "../components/Myths/MythsList"
import SchemeDirections from "../components/Scheme/SchemeDirections"
import SchemeRecomms from "../components/Scheme/SchemeRecomms"
import styles from '../styles/index.module.scss'

const Index = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <BlockTitle text={'ХОБЛ: мифы и реальность'}/>
                <MythsList />
            </div>
            <div className={styles.block}>
                <BlockTitle text={'Терапия ХОБЛ: что в фокусе?'}/>
                <div className={styles.block__text}>
                    Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
                </div>
                <div className={styles.block__scheme}>
                    <div className={styles.scheme__title}>
                        Приоритетные направления фармакотерапевтической стратегии при ХОБЛ
                        <sup>1</sup>:
                    </div>
                    <SchemeDirections />
                    <div className={styles.scheme__arrow}>
                        <Image className={styles.arrow} src="/arrow.svg" alt="" unoptimized/>
                        <Image className={styles.arrow} src="/arrow.svg" alt="" unoptimized/>
                    </div>
                    <SchemeRecomms />
                </div>
            </div>
        </div>
        
    )
}

export default Index