import React from 'react'
import { useLocalStorage } from 'react-use-storage';
import { GridDesign, GridDraw } from '_/components/grid';


import "./PreviewPart.scss";

export const PreviewPart = ({ ...props }) => {
    const [col] = useLocalStorage('columns', []);
    const [row] = useLocalStorage('rows', []);
    const [gap] = useLocalStorage('gaps', []);

    const cols = col.map(it => it.value + it.unit);
    const rows = row.map(it => it.value + it.unit);
    const gaps = gap.map(it => it.value + it.unit);

    return (
        <div {...props}>
            <GridDraw cols={cols} rows={rows} gaps={gaps} store="grid-design" />
            <GridDesign cols={cols} rows={rows} gaps={gaps} store="grid-design" />
        </div>
    )
}
