import { useLocalStorage } from 'react-use-storage';
import { createCSS } from '_/helpers/grid';
import "./GridDraw.scss"


export const GridDraw = ({ store = 'draw', cols = [], rows = [], gaps = [] }) => {
    const [state] = useLocalStorage(store, []);


    const divs = state.map((it, ix) => {
        return (
            <div key={'__' + ix} className={it.name} >
                <h1 className="legend">{it.name}</h1>
            </div>
        )
    })

    const inlineStyle = createCSS('grid-draw', { cols, rows, gaps, items: state });

    return (
        <>
            <style>{inlineStyle}</style>
            <div className="grid-draw">
                {divs}
            </div>
        </>
    )
}