import React from 'react'

export const OptionPart = ({ className }) => {
    return (
        <div className={className}>
            <button className="btn btn-danger">
                <i className="fa fa-download mr-2" />
                Download
            </button>
        </div>
    )
}
