import scheme from '../../styles/Scheme/SchemeDirections.module.scss'
import DirectionsItem from './DirectionsItem'

const list = [
    {id: 1, hasImg: true, title: `
        Ингаляционный<b>&nbsp;антихолинергик</b>`, 
        text: `
        Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с 
        ним в конкурентный антагонизм за взаимодействие с эффекторными 
        мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов<sup>1</sup>`
    },
    {id: 2, hasImg: true, title: `
        Ингаляционный <b>&nbsp;β2-агонист</b>`, 
        text: `
        Вызывает бронходилатацию посредством релаксации гладкомышечных 
        клеток бронхов независимо от характера констриктивных стимулов, 
        т. е. выступают в качестве функциональных антагонистов 
        бронхоконстрикции`
    },
    {id: 3, hasImg: true, 
        title: `
        Ингаляционный
        <b>&nbsp;глюкокортикостероид&nbsp;</b>
        (ИГКС)`, 
        text: `
        Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют 
        хроническое воспаление при астме и снижают гиперреактивность 
        дыхательных путей`
    },
]

export default function SchemeDirections() {
    return (
        <div className={scheme.scheme__directions}>
            {list.map(el => <DirectionsItem params={el}/>)}
        </div>
    )
}