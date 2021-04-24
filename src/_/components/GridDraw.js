import { useLocalStorage } from 'react-use-storage';
import { assertItems, createCSS } from '_/helpers/grid';
import "./GridDraw.scss"


export const GridDraw = ({ store = 'grid-items', cols = [], rows = [], gaps = [] }) => {
    const [items] = useLocalStorage(store, []);


    const opts = { cols, rows, gaps }
    const allowItems = assertItems(items, opts);

    const divs = allowItems.map((it, ix) => {
        return (
            <div key={'__' + ix} className={it.name} >
                <h1 className="legend">{it.name}</h1>
            </div>
        )
    })

    const inlineStyle = createCSS('grid-draw', items, opts);

    return (
        <>
            <style>{inlineStyle}</style>
            <div className="grid-draw">
                {divs}
            </div>
        </>
    )
}