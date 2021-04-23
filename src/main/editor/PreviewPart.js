import React from 'react'
import { useLocalStorage } from 'react-use-storage';

import "./PreviewPart.scss";

export const PreviewPart = ({ ...props }) => {
    const [col] = useLocalStorage('columns', []);
    const [row] = useLocalStorage('rows', []);
    const [gap] = useLocalStorage('gaps', []);

    const gridCols = col.reduce((str, it) => str + ' ' + it.value + it.unit, '');
    const gridRows = row.reduce((str, it) => str + ' ' + it.value + it.unit, '');
    const gridGaps = gap.reduce((str, it) => str + ' ' + it.value + it.unit, '');

    const inlineStyle = `
    .grid-dotted {
        display: grid;
        grid-template-columns: ${gridCols};
        grid-template-rows: ${gridRows};
        gap: ${gridGaps};
    }
    .grid-preview {
        display: grid;
        grid-template-columns: ${gridCols};
        grid-template-rows: ${gridRows};
        gap: ${gridGaps};
    }
    `
    return (
        <div {...props}>
            <style>{inlineStyle}</style>
            <div className="grid-root">
                <div className="grid-dotted">
                    {
                        row.map((r, i) => (
                            col.map((c, j) => (
                                <div key={i + '-' + j} className={'item-' + i + '-' + j}>
                                    <b>{c.value}{c.unit}-{r.value}{r.unit}</b>
                                </div>
                            ))
                        ))
                    }
                </div>
                <div className="grid-preview">
                    {
                        row.map((r, i) => (
                            col.map((c, j) => (
                                <div key={i + '-' + j} className={'item-' + i + '-' + j}>
                                    <b>{c.value}{c.unit}-{r.value}{r.unit}</b>
                                </div>
                            ))
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
