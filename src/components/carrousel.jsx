import { useState } from "react"
import schoolProjects from "../data/schoolProjects"
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
                <img src={schoolProjects[carrouselState].picture[0]} alt={schoolProjects[carrouselState].alt} className="carrousel__card--img" />
                <button onClick={handlePrev} className="carrousel__card--arrow left-btn"><i className="fa-solid fa-angle-left"></i></button>
                <button onClick={handleNext} className="carrousel__card--arrow right-btn"><i className="fa-solid fa-angle-right"></i></button>
            </article>


            <div className={`overlay ${modalIsOpen ? 'hide' : ''}`} onClick={() => setModalIsOpen(false)}>
                <div className={`carrousel__modal ${modalIsOpen ? "open" : "" }`} 
                    onClick={() => setModalIsOpen(true)}
                >
                    <button onClick={() => setModalIsOpen(false)} className="carrousel__modal--close-btn"></button>

                    <h2 className="carrousel__modal--title">{schoolProjects[carrouselState].title}</h2>
                    <p className="carrousel__modal--context">{schoolProjects[carrouselState].context}</p>

                    <img src={schoolProjects[carrouselState].picture[screenState]} alt={schoolProjects[carrouselState].alt} className="carrousel__modal--img" />
                    <button onClick={prevScreen} className="carrousel__modal--arrow left-btn"><i className="fa-solid fa-angle-left"></i></button>
                    <button onClick={nextScreen} className="carrousel__modal--arrow right-btn"><i className="fa-solid fa-angle-right"></i></button>

                    <p className="carrousel__modal--logo-text">Ce projet m'a permis de travailler avec :</p>
                    {schoolProjects[carrouselState].logoTech.map((logo,index) => (
                        <img key={index} src={logo} alt={schoolProjects[carrouselState].altLogoTech[index]} className="carrousel__modal--logo"/>
                    ))} 
                </div>
            </div>
        </div>
    )

}

export default Carrousel