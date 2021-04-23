import React, { useRef } from 'react'
import { useLocalStorage } from 'react-use-storage';
import { createCSS } from '_/helpers/grid';
import "./GridDesign.scss"
NodeList.prototype.forEach = Array.prototype.forEach;

export const GridDesign = ({ store = 'selected', cols = [], rows = [], gaps = [] }) => {
    const [state, setState] = useLocalStorage(store, []);
    const size = cols.length * rows.length;
    const ref = useRef()
    let divs = [];
    let selecting = false, start, end;

    const createPoint = (i) => {
        return {
            i,
            c: Math.trunc(i / cols.length),
            r: i % cols.length,
            name: 'item_' + i
        }
    }

    const beginSelection = (point) => {
        selecting = true;
        start = point
        updateSelection(point);
    };

    const endSelection = (point) => {
        selecting = false;
        end = point
        setState([...state, { name: 'cell' + state.length, start, end, color: randomColor() }])
        ref.current.querySelectorAll('div').forEach(it => it.classList.remove('on'))
    };

    const updateSelection = (point) => {
        if (selecting) {
            end = point
            const table = ref.current;
            for (let i = 0; i < size; i++) {
                const point = createPoint(i);
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
        const point = createPoint(i);
        const div = (
            <div key={point.name}
                name={point.name}
                onMouseDown={() => beginSelection(point)}
                onMouseUp={() => endSelection(point)}
                onMouseMove={() => updateSelection(point)}
                className="cell">
            </div>
        )
        divs.push(div);
    }

    const inlineStyle = createCSS('grid-design', { cols, rows, gaps });

    return (
        <div className="grid-design" ref={ref}>
            <style>{inlineStyle}</style>
            {divs}
        </div>
    )
}

const randomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
