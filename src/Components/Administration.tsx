import { Link } from "react-router-dom"

const Administration = () => {
    return (
        <section className="m-5">
            <h1>Administration</h1>
            <br />
            <p>Les administrateurs et les rédacteurs peuvent se retrouver ici.</p>
            <div className="">
                <div className="bg-blue-300 m-5 border-2 inline-block">
                <Link to="/crud">Ajouter/Modifier des Comics</Link>
                </div>
                <div className="bg-indigo-200 m-5 border-2 inline-block">
                <Link to="/">Accueil</Link>
                </div>
                
                
            </div>
        </section>
    )
}

export default Administration;