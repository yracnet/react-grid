import React from 'react'
import { useLocalStorage } from 'react-use-storage';
import { GridDesign, GridDraw } from '_/components';
import { DEFAULT_DEVICE } from './ActionPart';

export const PreviewPart = ({ ...props }) => {

    const [device] = useLocalStorage('grid-device', DEFAULT_DEVICE);
    const [cols] = useLocalStorage('grid-cols', []);
    const [rows] = useLocalStorage('grid-rows', []);
    const [gaps] = useLocalStorage('grid-gaps', []);
    const [items] = useLocalStorage('grid-items', []);

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
                <GridDraw cols={cols} rows={rows} gaps={gaps} store="grid-items" />
                <GridDesign cols={cols} rows={rows} gaps={gaps} store="grid-items" />
            </div>
        </div>
    )
}
