import Particle from "../../components/particles/particles.jsx"
import Card from "../../components/cards/cards.jsx"
import Carrousel from "../../components/carrousel/carrousel.jsx"
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
            <section className="introduction" id="a-propos">
                <Card className="introduction__text" imageClass="introduction__img" contentClass="introduction__content" text = "Curieux et rigoureux, je m'intéresse autant à l'expérience utilisateur qu'à la qualité du code." />
                <Card className="introduction__text" imageClass="introduction__img" contentClass="introduction__content" text = "J'aime créer des interfaces qui fonctionnent bien et qui se ressentent bien." />
                <Card className="introduction__text" imageClass="introduction__img" contentClass="introduction__content" text = "Je cherche une équipe avec qui construire des choses qui comptent." />
            </section>
            <section className="school-projects">
                <h2 className="school-projects__h2">Mes projets de formation</h2>
                <Carrousel />
                <h3 className="school-projects__h3">Ces projets reflètent ma progression et ma capacité à livrer des interfaces fonctionnelles, structurées et pensées pour l'utilisateur.</h3>
            </section>
            
        </main>
    )
}
export default Home