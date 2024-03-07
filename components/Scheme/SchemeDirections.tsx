import scheme from '../../styles/Scheme/SchemeDirections.module.scss'
import item from '../../styles/Scheme/ItemContent.module.scss'
import DirectionsItem from './DirectionsItem'

const list = [
    {id: 1, hasImg: true},
    {id: 2, hasImg: true},
    {id: 3, hasImg: true},
]

export default function SchemeDirections() {
    return (
        <div className={scheme.scheme__directions}>
            <DirectionsItem params={list[0]}>
                <div className={item.item__title}>
                    Ингаляционный<span className={item.item__title + ' ' + item.bold}>&nbsp;антихолинергик</span>
                </div>
                <div className={item.item__text}>
                    Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с 
                    ним в конкурентный антагонизм за взаимодействие с эффекторными 
                    мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов
                    <sup>1</sup>
                </div>
            </DirectionsItem>
            <DirectionsItem params={list[1]}>
                <div className={item.item__title}>
                    Ингаляционный <span className={item.item__title + ' ' + item.bold}>&nbsp;β2-агонист</span>
                </div>
                <div className={item.item__text}>
                    Вызывает бронходилатацию посредством релаксации гладкомышечных 
                    клеток бронхов независимо от характера констриктивных стимулов, 
                    т. е. выступают в качестве функциональных антагонистов 
                    бронхоконстрикции
                </div>
            </DirectionsItem>
            <DirectionsItem params={list[2]}>
                <div className={item.item__title}>
                    Ингаляционный
                    <span className={item.item__title + ' ' + item.bold}>&nbsp;глюкокортикостероид&nbsp;</span>
                    (ИГКС)
                </div>
                <div className={item.item__text}>
                    Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют 
                    хроническое воспаление при астме и снижают гиперреактивность 
                    дыхательных путей
                </div>
            </DirectionsItem>
        </div>
    )
}