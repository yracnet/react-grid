import React, { useRef } from 'react'
import { useLocalStorage } from 'react-use-storage';

export const SourcePart = ({ className }) => {
    const [col] = useLocalStorage('columns', []);
    const [row] = useLocalStorage('rows', []);
    const [gap] = useLocalStorage('gaps', []);

    const gridCols = col.reduce((str, it) => str + ' ' + it.value + it.unit, '');
    const gridRows = row.reduce((str, it) => str + ' ' + it.value + it.unit, '');
    const gridGaps = gap.reduce((str, it) => str + ' ' + it.value + it.unit, '');

    const inlineStyle = `
.grid-container {
    display: grid;
    grid-template-columns: ${gridCols};
    grid-template-rows: ${gridRows};
    gap: ${gridGaps};
}
    `
    const [ref, onToggle] = useToggle()
    return (
        <div className={className} ref={ref}>
            <code className="card card-sm">
                <h5 className="card-header">CSS Source</h5>
                <pre className="card-body">{inlineStyle}</pre>
            </code>
            <button className="move" onClick={onToggle}>
                <i className="fa fa-arrow-left" />
            </button>
        </div>
    )
}

const useToggle = (name = 'close') => {
    const ref = useRef(null)
    const onToggle = () => {
        if (ref.current) {
            ref.current.classList.toggle(name)
        }
    }
    return [ref, onToggle]
}
