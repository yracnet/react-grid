import React from 'react'

export const ActionPart = ({ className }) => {
    return (
        <div className={className}>
            <div className="btn-group m-3">
                <button className="btn btn-danger">
                    <i className="fa fa-tv mr-2" />
                    Tv
                </button>
                <button className="btn btn-danger">
                    <i className="fa fa-windows mr-2" />
                    Desktop
                </button>
                <button className="btn btn-danger">
                    <i className="fa fa-table mr-2" />
                    Tablet
                </button>
                <button className="btn btn-danger">
                    <i className="fa fa-android mr-2" />
                    Mobile
                </button>
            </div>
        </div>
    )
}
