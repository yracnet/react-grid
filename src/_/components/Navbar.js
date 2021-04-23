import React from 'react'

export const Navbar = ({ name }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#/home">
                <img src={process.env.PUBLIC_URL + '/_/android-chrome-192x192.png'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt={name} />
                {name}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu01" aria-controls="menu01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#/hom">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/feat">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/pre">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/aou">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
