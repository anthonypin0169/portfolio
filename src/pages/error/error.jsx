import "./error.scss"

function Error () {
    return(
        <main className="error">
            <h1 className="error__title">La page recherchée n'existe pas ou n'est plus fonctionelle</h1>
            <h2 className="error__404">404</h2>
        </main>
    )
}

export default Error