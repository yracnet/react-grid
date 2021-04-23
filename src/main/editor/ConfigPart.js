import React from 'react'
import { GridUnit } from '_/components/grid';
import { GridGap } from '_/components/grid';
import { GridItem } from '_/components/grid/GridItem';

export const ConfigPart = ({ name, ...props }) => {
    return (
        <div {...props}>
            <GridUnit title="Grid Columns" name="columns" />
            <GridUnit title="Grid Rows" name="rows" />
            <GridGap title="Grid Gap" name="gaps" />
            <GridItem title="Grid Items" store="grid-design" />
        </div>
    )
}
