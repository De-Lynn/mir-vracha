import { useState } from "react"
import BlockTitle from "../components/BlockTitle"
import MythsAnotherPage from "../components/Myths/MythsListAnotherPage"
import MythsTurning from '../components/Myths/MythsListTurning'
import SchemeDirections from "../components/Scheme/SchemeDirections"
import SchemeRecomms from "../components/Scheme/SchemeRecomms"
import styles from '../styles/index.module.scss'

const Index = () => {
    const [method, setMethod] = useState('page')

    return (
        <div className={styles.wrapper}>

            <div className={styles.switch}>
                Switch
                <div className={styles.switch__control}>
                    <button className={styles.switch__btn + (method === 'page' ? (' ' + styles.active) : '')} 
                        onClick={() => setMethod('page')}
                    >
                        Another page
                    </button>
                    <button className={styles.switch__btn + (method === 'turning' ? (' ' + styles.active) : '')} 
                        onClick={() => setMethod('turning')}
                    >
                        Turning over
                    </button>
                </div>
            </div>
            <div className={styles.block}>
                <BlockTitle text={'ХОБЛ: мифы и реальность'}/>
                {method === 'page' && <MythsAnotherPage />}
                {method === 'turning' && <MythsTurning />}
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
                        <img className={styles.arrow} src="/arrow.svg" alt=""/>
                        <img className={styles.arrow} src="/arrow.svg" alt=""/>
                    </div>
                    <SchemeRecomms />
                </div>
            </div>
        </div>
        
    )
}

export default Index