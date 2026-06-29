import { useState } from "react"
import schoolProjects from "../data/schoolProjects"
function Carrousel () {

    const [carrouselState, setCarrouselState] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false)

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

    return(
        <div className="carrousel-card">
            <article className="carrousel__card">
                <h2 className="carrousel__card--title">{schoolProjects[carrouselState].title}</h2>
                <img src={schoolProjects[carrouselState].picture} alt={schoolProjects[carrouselState].alt} className="carrousel__card--img" />
                <button onClick={handlePrev} className="carrousel__card--arrow fa-angle-left"></button>
                <button onClick={handleNext} className="carrousel__card--arrow fa-angle-right"></button>
            </article>
        </div>
    )

}

export default Carrousel