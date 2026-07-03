import { useState } from "react"
import "./careers.scss"
function Careers () {
   
    const [rotate, setRotate] = useState([false, false, false])

    const toggleCard = (index) => {
        setRotate(rotate.map((val, i) => i === index ? !val : val))
    }


    return(
        <main>

            <h1 className="title">Mes compétances</h1>

            <section className="css-anim">

                <h2 className="css-anim__h2">Animations CSS</h2>
                <div className="css-anim__card-group">
                    <div className={`card ${rotate[0] ? "flipped" : "" }`} onClick={() => toggleCard(0)}>
                        <div className="card__front">
                            <div className={`card__front--content ${rotate[0] ? "shine" : ""}`}>C</div>
                        </div>
                        <div className="card__back">
                            <div className="card__back--content"></div>
                        </div>
                    </div>

                    <div className={`card ${rotate[1] ? "flipped" : "" }`} onClick={() => toggleCard(1)}>
                        <div className="card__front">
                            <div className={`card__front--content ${rotate[1] ? "shine" : ""}`}>S</div>
                        </div>
                        <div className="card__back">
                            <div className="card__back--content"></div>
                        </div>
                    </div>

                    <div className={`card ${rotate[2] ? "flipped" : "" }`} onClick={() => toggleCard(2)}>
                        <div className="card__front">
                            <div className={`card__front--content ${rotate[2] ? "shine" : ""}`}>S</div>
                        </div>
                        <div className="card__back">
                            <div className="card__back--content"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="css-responsive">

            </section>
        </main>
    )
}
export default Careers