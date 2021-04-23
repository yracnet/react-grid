
export const HeaderPart = ({ name, ...props }) => {
    return (
        <header {...props}>
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
        </header>
    )
}
