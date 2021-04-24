import React from 'react'
import { GridUnit, GridGap, GridItem } from '_/components';

export const ConfigPart = ({ name, ...props }) => {
    return (
        <div {...props}>
            <GridUnit title="Grid Columns" name="grid-cols" />
            <GridUnit title="Grid Rows" name="grid-rows" />
            <GridGap title="Grid Gap" name="grid-gaps" />
            <GridItem title="Grid Items" store="grid-items" />
        </div>
    )
}
