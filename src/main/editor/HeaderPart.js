import React from 'react'

export const HeaderPart = ({ className, name }) => {
    return (
        <div className={className}>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#/home">
                    <img src={process.env.PUBLIC_URL + '/_/android-chrome-192x192.png'}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt={name} />
                    {name}
                </a>
            </nav>
        </div>
    )
}
