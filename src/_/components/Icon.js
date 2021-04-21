import React from 'react'

export const Icon = ({ name, family = 'fa', size = '1x', className = '' }) => {
    return (
        <i className={`${family} ${family}-${name} ${family}-${size} ${className}`}>
        </i>
    )
}
