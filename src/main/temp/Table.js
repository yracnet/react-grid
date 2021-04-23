import React, { useRef } from 'react'
import "./Table.scss"

export const Table = ({ columns = ['1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr'], rows = ['1fr', '1fr', '1fr', '1fr'], gaps = ['5px', '5px'] }) => {
    const size = columns.length * rows.length;
    const ref = useRef()
    let divs = [];
    let selecting = false, start, end;

    let beginSelection = (point) => {
        selecting = true;
        start = point
        updateSelection(point);
    };

    let endSelection = (point) => {
        selecting = false;
        end = point
    };

    let updateSelection = (point) => {
        if (selecting) {
            end = point
            const table = ref.current;
            for (let i = 0; i < size; i++) {
                const point = createPoint(i, columns.length);
                const div = table.querySelector(`[name='${point.name}']`)
                if (start.c <= point.c && point.c <= end.c && start.r <= point.r && point.r <= end.r) {
                    div.classList.add('on')
                } else {
                    div.classList.remove('on')
                }
            }
        }
    };


    for (let i = 0; i < size; i++) {
        const point = createPoint(i, columns.length);
        const div = (
            <div key={point.name}
                name={point.name}
                onMouseDown={() => beginSelection(point)}
                onMouseUp={() => endSelection(point)}
                onMouseMove={() => updateSelection(point)}
                className="item">
                {point.c} x {point.r}
            </div>
        )
        divs.push(div);
    }

    const gridCols = columns.reduce((str, it) => str + ' ' + it, '');
    const gridRows = rows.reduce((str, it) => str + ' ' + it, '');
    const gridGaps = gaps.reduce((str, it) => str + ' ' + it, '');
    const inlineStyle = `
    .grid-dotted {
        display: grid;
        grid-template-columns: ${gridCols};
        grid-template-rows: ${gridRows};
        gap: ${gridGaps};
    }
    `

    return (
        <div className="grid-dotted" ref={ref}>
            <style>{inlineStyle}</style>
            {divs}
        </div>
    )
}

const createPoint = (i, columns) => {
    return {
        i,
        c: Math.trunc(i / columns),
        r: i % columns,
        name: 'item_' + i
    }
}