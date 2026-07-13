import { useState } from "react"
import persProjects from "../../data/persProjects.js"
import Card from "../../components/cards/cards.jsx"
import "./projects.scss"

function Projects () {
    const [selectedProject, setSelectedProject] = useState(null)
    const currentProject = persProjects.find(p => p.id === selectedProject)

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <main>
            <section className="personnal-works">
                <h1 className="personnal-works__title">Des projets choisis, construits à ma façon.</h1>
                <h2 className="personnal-works__sub-title">Projets achevés..</h2>
                <h2 className="personnal-works__sub-title">Projets en cours..</h2>
                <Card onClick={() => {setSelectedProject(1); setModalIsOpen(true)}} className="personnal-works__card" contentClass="personnal-works__content" text="Côté détente" src="./images/cotedetente1.avif" alt="photo de la page d'accueil du site Côté détente" imageClass="personnal-works__img"/>
                <div className={`overlay ${modalIsOpen ? 'hide' : ''}`} onClick={() => setModalIsOpen(false)}>
                    <div className={`personnal-works__modal ${modalIsOpen ? "open" : "" }`} onClick={(e) => e.stopPropagation()}>

                        <button onClick={() => setModalIsOpen(false)} className="personnal-works__modal--close-btn">
                            <div className="close-btn-stick stick1"></div>
                            <div className="close-btn-stick stick2"></div>
                        </button>

                        <div className="personnal-works__modal--text">
                            <h2 className="personnal-works__modal--title">{currentProject?.title}</h2>
                            <h3>Contexte du projet :</h3>
                            <p>{currentProject?.context}</p>
                            <p>{currentProject?.objectiv}</p>
                        </div>

                        <h4 className="personnal-works__modal--h4">Voici la banière carrousel de la page d'accueil :</h4>
                        <picture>
                            <source srcSet={currentProject?.picture[0]} type="image/avif" />
                            <img src={currentProject?.picture[0]?.replace(".avif", ".png")} alt={currentProject?.alt} className="personnal-works__modal--img"/>
                        </picture>

                        <h4 className="personnal-works__modal--h4">La modale de connexion des Admins</h4>
                        <picture>
                            <source srcSet={currentProject?.picture[1]} type="image/avif" />
                            <img src={currentProject?.picture[1]?.replace(".avif", ".png")} alt={currentProject?.alt} className="personnal-works__modal--img"/>
                        </picture>

                        <h4 className="personnal-works__modal--h4">La modale de modification des carrousels</h4>
                        <p className="personnal-works__modal--text">Elle permet en quelques clics d'ajouter une photo depuis ses dossiers ou de retirer une photo existante. Toute photo ajoutée sera allégée et optimisée par Sharp.</p>
                        <picture>
                            <source srcSet={currentProject?.picture[2]} type="image/avif" />
                            <img src={currentProject?.picture[2]?.replace(".avif", ".png")} alt={currentProject?.alt} className="personnal-works__modal--img"/>
                        </picture>

                        <h4 className="personnal-works__modal--h4">Un bouton de modification de zone de texte</h4>
                        <p className="personnal-works__modal--text">Le texte s'insère sur la gauche du carrousel d'image et l'espace de la section est réparti automatiquement pour créer un visuel équilibré.</p>
                        <picture>
                            <source srcSet={currentProject?.picture[3]} type="image/avif" />
                            <img src={currentProject?.picture[3]?.replace(".avif", ".png")} alt={currentProject?.alt} className="personnal-works__modal--img"/>
                        </picture>

                        <h4 className="personnal-works__modal--h4">La modale qui permet la modification</h4>
                        <picture>
                            <source srcSet={currentProject?.picture[4]} type="image/avif" />
                            <img src={currentProject?.picture[4]?.replace(".avif", ".png")} alt={currentProject?.alt} className="personnal-works__modal--img"/>
                        </picture>

                        <h4 className="personnal-works__modal--h4">Un bouton pour ajouter une fiche du personnel</h4>
                        <picture>
                            <source srcSet={currentProject?.picture[5]} type="image/avif" />
                            <img src={currentProject?.picture[5]?.replace(".avif", ".png")} alt={currentProject?.alt} className="personnal-works__modal--img"/>
                        </picture>

                        <h4 className="personnal-works__modal--h4">La modale qui le permet</h4>
                        <picture>
                            <source srcSet={currentProject?.picture[6]} type="image/avif" />
                            <img src={currentProject?.picture[6]?.replace(".avif", ".png")} alt={currentProject?.alt} className="personnal-works__modal--img"/>
                        </picture>

                        <h4 className="personnal-works__modal--h4">Et le résultat</h4>
                        <p className="personnal-works__modal--text">Un bouton modifier est disponible sous les fiches. Il fait apparaitre une modale du même format que la précédente mais permettra de changer les informations d'une fiche existante.</p>
                        <picture>
                            <source srcSet={currentProject?.picture[7]} type="image/avif" />
                            <img src={currentProject?.picture[7]?.replace(".avif", ".png")} alt={currentProject?.alt} className="personnal-works__modal--img"/>
                        </picture>

                        <h3>Ce projet m'a permis de travailler avec :</h3>
                        <div className="personnal-works__modal--logo-container">
                            {currentProject?.logoTech.map((logo,index) => (
                                <picture key={index}>
                                    <source srcSet={logo} type="image/avif" />
                                    <img src={logo?.replace(".avif", ".png")} alt={currentProject.altLogoTech[index]} className="logo"/>
                                </picture>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Projects