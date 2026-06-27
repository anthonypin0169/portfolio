import Particle from "../components/particles.jsx"
import "./home.scss"
function Home () {
    return(
        <main>
            <section className="banner" >
                <Particle />
                <h2 className="banner__h2 title">Anthony Pin</h2>
                <h1 className="banner__h1 title">Développeur Front-end</h1>
                <h3 className="banner__h3 title">Précis sur les détails, ambitieux sur les projets.</h3>
            </section>
            <section className="introduction">
                <p className="introduction__text intro-1">Curieux et rigoureux, je m'intéresse autant à l'expérience utilisateur qu'à la qualité du code.</p>
                <p className="introduction__text intro-2">J'aime créer des interfaces qui fonctionnent bien et qui se ressentent bien.</p>
                <p className="introduction__text intro-3">Je cherche une équipe avec qui construire des choses qui comptent.</p>
            </section>
            <section className="school-projects"></section>
            <section className="personnal-works"></section>
        </main>
    )
}
export default Home