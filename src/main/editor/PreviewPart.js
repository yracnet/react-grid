import React from 'react'
import { useLocalStorage } from 'react-use-storage';
import { GridDesign, GridDraw } from '_/components';
import { DEFAULT_DEVICE } from './ActionPart';

export const PreviewPart = ({ ...props }) => {

    const [device] = useLocalStorage('device', DEFAULT_DEVICE);
    const [col] = useLocalStorage('columns', []);
    const [row] = useLocalStorage('rows', []);
    const [gap] = useLocalStorage('gaps', []);

    const cols = col.map(it => it.value + it.unit);
    const rows = row.map(it => it.value + it.unit);
    const gaps = gap.map(it => it.value + it.unit);

    const inlineStyle = `
    .device{
        position: relative;
        margin: 0 auto;
        width: ${device.verical ? device.width : device.height};
        height: ${device.verical ? device.height : device.width};


    }
    `
    return (
        <div {...props}>
            <style>{inlineStyle}</style>
            <div className="device">
                <GridDraw cols={cols} rows={rows} gaps={gaps} store="grid-design" />
                <GridDesign cols={cols} rows={rows} gaps={gaps} store="grid-design" />
            </div>
        </div>
    )
}
