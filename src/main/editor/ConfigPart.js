import React from 'react'
import { GridItem } from '_/components/grid/GridItem';
import { GridGap } from '_/components/grid/GridGap';

export const ConfigPart = ({ name, ...props }) => {
    return (
        <div {...props}>
            <GridItem title="Grid Columns" name="columns" />
            <GridItem title="Grid Rows" name="rows" />
            <GridGap title="Grid Gap" name="gaps" />
        </div>
    )
}
