import { useState } from "react"
import schoolProjects from "../../data/schoolProjects"
import { IconAngleLeft, IconAngleRight } from "../icons/icons"
import "./carrousel.scss"
function Carrousel () {

    const [carrouselState, setCarrouselState] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [screenState, setScreenState] = useState(0)


    const handlePrev = () => {
        setCarrouselState(
            carrouselState === 0 ? schoolProjects.length -1 : carrouselState -1
        )
    }
    const handleNext = () => {
        setCarrouselState(
          (carrouselState + 1) % schoolProjects.length
        )
    }


    const prevScreen = () => {
        setScreenState(
            screenState === 0 ? schoolProjects[carrouselState].picture.length -1 : screenState -1
        )
    }
    const nextScreen = () => {
        setScreenState(
            (screenState + 1) % schoolProjects[carrouselState].picture.length
        )
    }

    return(
        <div className="carrousel">
            <article onClick={() => setModalIsOpen(true)} className="carrousel__card">
                <h2 className="carrousel__card--title">{schoolProjects[carrouselState].title}</h2>
                <div className="carrousel__card--img-wrapper">
                    <picture>
                        <source srcSet={schoolProjects[carrouselState].picture[0]} type="image/avif" />
                        <img
                        src={schoolProjects[carrouselState].picture[0]?.replace(".avif", ".png")}
                        alt={schoolProjects[carrouselState].alt}
                        className="carrousel__card--img"
                        />
                    </picture>
                    <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} aria-label="Projet précédent" className="carrousel__card--arrow left-btn"><IconAngleLeft className="fa-angle-left" /></button>
                    <button onClick={(e) => { e.stopPropagation(); handleNext(); }} aria-label="Projet suivant" className="carrousel__card--arrow right-btn"><IconAngleRight className="fa-angle-right" /></button>
                </div>
            </article>


            <div className={`overlay ${modalIsOpen ? 'hide' : ''}`} onClick={() => setModalIsOpen(false)}>
                <div className={`carrousel__modal ${modalIsOpen ? "open" : "" }`} 
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={() => setModalIsOpen(false)} aria-label="Fermer" className="carrousel__modal--close-btn">
                        <div className="close-btn-stick stick1"></div>
                        <div className="close-btn-stick stick2"></div>
                    </button>

                    <h2 className="carrousel__modal--title">{schoolProjects[carrouselState].title}</h2>
                    <p className="carrousel__modal--context">{schoolProjects[carrouselState].context}</p>

                    <div className="carrousel__modal--img-wrapper">
                        <picture>
                            <source srcSet={schoolProjects[carrouselState].picture[screenState]} type="image/avif" />
                            <img src={schoolProjects[carrouselState].picture[screenState]?.replace(".avif", ".png")} alt={schoolProjects[carrouselState].alt} className="carrousel__modal--img" />
                        </picture>
                        <button onClick={prevScreen} aria-label="Image précédente" className="carrousel__modal--arrow left-btn"><IconAngleLeft className="fa-angle-left" /></button>
                        <button onClick={nextScreen} aria-label="Image suivante" className="carrousel__modal--arrow right-btn"><IconAngleRight className="fa-angle-right" /></button>
                    </div>

                    <div className="carrousel__modal--improvements">
                        <h3>Axes d'améliorations :</h3>
                        <p>{schoolProjects[carrouselState].improvements}</p>
                    </div>

                    <div className="carrousel__modal--logo">
                        <h3 className="logo-text">Ce projet m'a permis de travailler avec :</h3>
                        {schoolProjects[carrouselState].logoTech.map((logo,index) => (
                            <picture key={index}>
                                <source srcSet={logo} type="image/avif" />
                                <img src={logo?.replace(".avif", ".png")} alt={schoolProjects[carrouselState].altLogoTech[index]} className="logo"/>
                            </picture>
                        ))}
                    </div>
                    <h3 className="carrousel__modal--p">Pour en savoir plus sur le projet..</h3>
                    <p className="carrousel__modal--p">{schoolProjects[carrouselState].repository}</p>
                </div>
            </div>
        </div>
    )
}

export default Carrousel