import { useLocalStorage } from 'react-use-storage';
import "./GridDraw.scss"

const INIT = { state: {}, end: {}, selected: false }

export const GridDraw = ({ name = 'draw', selected = 'selected', cols = [], rows = [], gaps = [] }) => {
    const [state, setState] = useLocalStorage(name, INIT);
    const size = cols.length * rows.length
    const divs = []


    const createPoint = (i) => {
        return {
            i,
            c: Math.trunc(i / cols.length),
            r: i % cols.length,
            name: 'item_' + i
        }
    }




    for (let i = 0; i < size; i++) {
        const point = createPoint(i);
        const div = (
            <div key={point.name}>
                {cols[point.c]} x {rows[point.r]}
                <code>
                    {point.c} x {point.r}
                </code>
            </div>
        )
        divs.push(div);
    }

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
    `
    return (
        <div className="grid-draw">
            <style>{inlineStyle}</style>
            {divs}
        </div>
    )
}