import { useLocalStorage } from 'react-use-storage';
import "./GridDraw.scss"


export const GridDraw = ({ store = 'draw', cols = [], rows = [], gaps = [] }) => {
    const [state, setState] = useLocalStorage(store, []);
    console.log('GridDraw--->', state);
    let inlineDivStyle = '';

    const divs = state.map((it, ix) => {
        inlineDivStyle += `
.grid-draw > .${it.name}{
    grid-area: ${it.start.c + 1} / ${it.start.r + 1} / ${it.end.c + 2} / ${it.end.r + 2};
    border: 4px solid ${it.color};
}
        `

        return (
            <div key={'__' + ix} className={it.name} >
                <h1>{it.name}</h1>
            </div>
        )
    })


    const gtc = cols.reduce((str, it) => str + ' ' + it, '');
    const gtr = rows.reduce((str, it) => str + ' ' + it, '');
    const gg = gaps.reduce((str, it) => str + ' ' + it, '');
    const inlineStyle = `
    .grid-draw {
        display: grid;
        grid-template-columns: ${gtc};
        grid-template-rows: ${gtr};
        gap: ${gg};
    }
    
    ${inlineDivStyle}
    
    `
    return (
        <>
            <style>{inlineStyle}</style>
            <div className="grid-draw">
                {divs}
            </div>
        </>
    )
}