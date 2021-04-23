import React from 'react'
import { GridItem } from '_/components/grid';
import { GridGap } from '_/components/grid';
import { GridName } from '_/components/grid';

export const ConfigPart = ({ name, ...props }) => {
    return (
        <div {...props}>
            <GridItem title="Grid Columns" name="columns" />
            <GridItem title="Grid Rows" name="rows" />
            <GridGap title="Grid Gap" name="gaps" />
            <GridName title="Grid Area" name="grid-selected" />
        </div>
    )
}
