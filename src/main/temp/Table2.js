import React, { useRef } from 'react'
import "./Table.scss"

export const Table2 = ({ cols = 10, rows = 5 }) => {
    const ref = useRef()
    let divs = [];
    let names = [];
    let selecting = false, start = {}, end = {};

    let beginSelection = (i, j) => {
        selecting = true;
        start = { i, j }
        updateSelection(i, j);
    };

    let endSelection = (i, j) => {
        selecting = false;
        end = { i, j }
    };

    let updateSelection = (i, j) => {
        if (selecting) {
            end = { i, j }
            //console.log('updateSelection-->', i, j, names[i][j]);
            //var children = ref.current.childNodes;
            //console.log('children', children);
            const table = ref.current;

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const div = table.querySelector(`[name='${names[i][j]}']`)
                    if (start.i <= i && i <= end.i && start.j <= j && j <= end.j) {
                        div.classList.add('on')
                    } else {
                        div.classList.remove('on')
                    }
                }
            }
        }
    };

    for (let i = 0; i < rows; i++) {
        names[i] = []
        for (let j = 0; j < cols; j++) {
            const name = 'item_' + i + '_' + j
            names[i][j] = name
            const div = (
                <div key={name}
                    name={name}
                    onMouseDown={() => beginSelection(i, j)}
                    onMouseUp={() => endSelection(i, j)}
                    onMouseMove={() => updateSelection(i, j)}
                    className="item">
                    {i} x {j}
                </div>
            )
            divs.push(div);
        }
        divs.push(<br key={'br_' + i} />);
    }

    return (
        <div className="grid-dotted" ref={ref}>
            {divs}
        </div>
    )
}