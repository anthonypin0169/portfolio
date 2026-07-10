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
                <h3 className="personnal-works__title">Projets achevés..</h3>
                <h3 className="personnal-works__title">Projets en cours..</h3>
                <Card onClick={() => {setSelectedProject(1); setModalIsOpen(true)}} className="personnal-works__card" contentClass="personnal-works__content" text="Côté détente" src="./images/cotedetente1.png" alt="photo de la page d'accueil du site Côté détente" imageClass="personnal-works__img"/>
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
                        <img src={currentProject?.picture[0]} alt={currentProject?.alt} className="personnal-works__modal--img"/>

                        <h4 className="personnal-works__modal--h4">La modale de connexion des Admins</h4>
                        <img src={currentProject?.picture[1]} alt={currentProject?.alt} className="personnal-works__modal--img"/>

                        <h4 className="personnal-works__modal--h4">La modale de modification des carrousels</h4>
                        <p className="personnal-works__modal--text">Elle permet en quelques clics d'ajouter une photo depuis ses dossiers ou de retirer une photo existante. Toute photo ajoutée sera allégée et optimisée par Sharp.</p>
                        <img src={currentProject?.picture[2]} alt={currentProject?.alt} className="personnal-works__modal--img"/>

                        <h4 className="personnal-works__modal--h4">Un bouton de modification de zone de texte</h4>
                        <p className="personnal-works__modal--text">Le texte s'insère sur la gauche du carrousel d'image et l'espace de la section est réparti automatiquement pour créer un visuel équilibré.</p>
                        <img src={currentProject?.picture[3]} alt={currentProject?.alt} className="personnal-works__modal--img"/>
                        
                        <h4 className="personnal-works__modal--h4">La modale qui permet la modification</h4>
                        <img src={currentProject?.picture[4]} alt={currentProject?.alt} className="personnal-works__modal--img"/>

                        <h4 className="personnal-works__modal--h4">Un bouton pour ajouter une fiche du personnel</h4>
                        <img src={currentProject?.picture[5]} alt={currentProject?.alt} className="personnal-works__modal--img"/>

                        <h4 className="personnal-works__modal--h4">La modale qui le permet</h4>
                        <img src={currentProject?.picture[6]} alt={currentProject?.alt} className="personnal-works__modal--img"/>

                        <h4 className="personnal-works__modal--h4">Et le résultat</h4>
                        <p className="personnal-works__modal--text">Un bouton modifier est disponible sous les fiches. Il fait apparaitre une modale du même format que la précédente mais permettra de changer les informations d'une fiche existante.</p>
                        <img src={currentProject?.picture[7]} alt={currentProject?.alt} className="personnal-works__modal--img"/>

                        <h3>Ce projet m'a permis de travailler avec :</h3>
                        <div className="personnal-works__modal--logo-container">
                            {currentProject?.logoTech.map((logo,index) => (
                                <img key={index} src={logo} alt={currentProject.altLogoTech[index]} className="logo"/>
                            ))} 
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Projects