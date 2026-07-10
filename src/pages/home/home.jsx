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

            <section className="path">
                <h2 className="path__title">Parcours</h2>
                <div className="path__sub-section">
                    <h3 className="path__sub-section--h3">Ma précédente situation :</h3>
                     <Card className="path__sub-section--text" contentClass="path__sub-section--content" text = "Six ans dans le coaching sportif en freelance, en partenariat avec de grandes enseignes." />
                </div>
                <div className="path__sub-section">
                    <h3 className="path__sub-section--h3">Pourquoi le front-end ?</h3>
                     <Card className="path__sub-section--text" contentClass="path__sub-section--content" text = "Après bilan sur la situation économique de mon ancien domaine, j'ai observé que le pouvoir d'achat des clients potentiels ne leur permettait pas d'accéder à mes services. J'en ai conclu que le meilleur moyen de rendre accessibles mes connaissances de coach était de les diffuser via un site / une app au contenu et aux fonctionnalités qualitatives." />
                </div>
                <div className="path__sub-section">
                    <h3 className="path__sub-section--h3">Ma situation actuelle :</h3>
                     <Card className="path__sub-section--text" contentClass="path__sub-section--content" text = "Aujourd'hui ma perspective a changé, mon projet initial est devenu un projet personnel secondaire et j'ai développé un réel plaisir à construire des interfaces de qualité." />
                </div>
            </section>
            
        </main>
    )
}
export default Home