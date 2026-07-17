import { useState, lazy, Suspense } from "react"
import Card from "../../components/cards/cards.jsx"
import Carrousel from "../../components/carrousel/carrousel.jsx"
import { IconAngleLeft, IconAngleRight } from "../../components/icons/icons.jsx"
import schoolProjects from "../../data/schoolProjects.js"
import "./home.scss"

const Particle = lazy(() => import("../../components/particles/particles.jsx"))

function Home () {
    const [selectedProjectId, setSelectedProjectId] = useState(null)
    const [screenState, setScreenState] = useState(0)
    const selectedProject = schoolProjects.find(p => p.id === selectedProjectId)

    const openModal = (id) => {
        setSelectedProjectId(id)
        setScreenState(0)
    }
    const closeModal = () => setSelectedProjectId(null)

    const prevScreen = () => {
        setScreenState(
            screenState === 0 ? selectedProject.picture.length - 1 : screenState - 1
        )
    }
    const nextScreen = () => {
        setScreenState(
            (screenState + 1) % selectedProject.picture.length
        )
    }

    return(
        <main>
            <section className="banner" >
                <Suspense fallback={null}>
                    <Particle />
                </Suspense>
                <h1 className="banner__h2 title">Anthony Pin</h1>
                <h2 className="banner__h1 title">Développeur Front-end</h2>
                <h3 className="banner__h3 title">Précis sur les détails, ambitieux sur les projets.</h3>
            </section>

            <section className="introduction" id="a-propos">
                <Card className="introduction__text" imageClass="introduction__img" contentClass="introduction__content" text = "Curieux et rigoureux, je m'intéresse autant à l'expérience utilisateur qu'à la qualité du code." />
                <Card className="introduction__text" imageClass="introduction__img" contentClass="introduction__content" text = "J'aime créer des interfaces qui fonctionnent bien et qui se ressentent bien." />
                <Card className="introduction__text" imageClass="introduction__img" contentClass="introduction__content" text = "Basé à Bourg-en-Bresse, ouvert au télétravail et aux missions à Lyon, je cherche une équipe avec qui construire des choses qui comptent." />
            </section>

            <section className="school-projects">
                <h2 className="school-projects__h2">Mes projets de formation</h2>
                <Carrousel />
                <div className="school-projects__cards">
                    {schoolProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="school-projects__cards--border"
                            contentClass="school-projects__cards--content"
                            imageClass="school-projects__cards--img"
                            src={project.picture[0]}
                            alt={project.alt}
                            text={<h3 className="school-projects__cards--title">{project.title}</h3>}
                            onClick={() => openModal(project.id)}
                        />
                    ))}
                </div>

                <div className={`overlay-projects ${selectedProjectId ? "hide" : "" }`} onClick={closeModal}>
                    <div className={`school-projects__modal ${selectedProjectId ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeModal} aria-label="Fermer" className="school-projects__modal--close-btn">
                            <div className="close-btn-stick stick1"></div>
                            <div className="close-btn-stick stick2"></div>
                        </button>

                        <h2 className="school-projects__modal--title">{selectedProject?.title}</h2>
                        <p className="school-projects__modal--context">{selectedProject?.context}</p>

                        <div className="school-projects__modal--img-wrapper">
                            <img src={selectedProject?.picture[screenState]} alt={selectedProject?.alt} className="school-projects__modal--img" />
                            <button onClick={prevScreen} aria-label="Image précédente" className="school-projects__modal--arrow left-btn"><IconAngleLeft className="fa-angle-left" /></button>
                            <button onClick={nextScreen} aria-label="Image suivante" className="school-projects__modal--arrow right-btn"><IconAngleRight className="fa-angle-right" /></button>
                        </div>

                        <div className="school-projects__modal--improvements">
                            <h3>Axes d'améliorations :</h3>
                            <p>{selectedProject?.improvements}</p>
                        </div>

                        <div className="school-projects__modal--logo">
                            <h3 className="logo-text">Ce projet m'a permis de travailler avec :</h3>
                            {selectedProject?.logoTech.map((logo, index) => (
                                <img key={index} src={logo} alt={selectedProject.altLogoTech[index]} className="logo"/>
                            ))}
                        </div>
                        <h3 className="school-projects__modal--p">Pour en savoir plus sur le projet..</h3>
                        <p className="school-projects__modal--p">{selectedProject?.repository}</p>
                    </div>
                </div>

                <h3 className="school-projects__h3">Ces projets reflètent ma progression et ma capacité à livrer des interfaces fonctionnelles, structurées et pensées pour l'utilisateur.</h3>
            </section>

            <section className="path" id="parcours">
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
                     <Card className="path__sub-section--text" contentClass="path__sub-section--content" text = "Aujourd'hui ma perspective a changé, mon projet initial est devenu un projet personnel secondaire et j'ai développé un réel plaisir à construire des interfaces de qualité en React et JavaScript, avec l'ambition de devenir développeur front-end." />
                </div>
            </section>
            {/*
                <section className="testimony-and-graduation">
                    <h2 className="testimony-and-graduation__title">Certificats</h2>
                    <Card className="graduation__card" contentClass="graduation__card--content" imageClass="graduation__card--img" alt="Open-classroom intégrateur web"/>
                </section>
            */}
            
            
        </main>
    )
}
export default Home