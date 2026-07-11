import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment } from "../../store/counterSlice"
import SortDemo from "../../components/sortDemo/sortDemo"
import "./careers.scss"

function Careers () {
   

    //Animations des cartes CSS
    const [rotate, setRotate] = useState([false, false, false])
    const toggleCard = (index) => {
        setRotate(rotate.map((val, i) => i === index ? !val : val))
    }


    //Responsive CSS
    const [width, setWidth] = useState(200)


    //Compteur Redux
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()


    //Element React
    const [color, setColor] = useState("#ffffff")


    //Event JS barre de chargement
    const [progress, setProgress] = useState(0)
    const directionRef = useRef(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (directionRef.current === 1) return Math.min(prev + 1, 100)
                return Math.max(prev - 1, 0)
            })
        }, 15)
        return () => clearInterval(interval)
    }, [])

    const startPress = () => { directionRef.current = 1 }
    const stopPress = () => { directionRef.current = 0 }


    return(
        <main className="main">

            <h1 className="main__title">Mes compétences</h1>
            <div className="responsive-bloc">
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
                    <div className="border">
                        <div className="border__detail-card">
                            <h4 className="border__detail-card--paragraph">Intégrer des animations fluides.</h4>
                            <ul className="border__detail-card--sub-paragraph">
                                <li>Contrôle de la fluidité (Transition pour anim simple - keyframes pour séquences complexes)</li>
                                <li>Fonctions de timing (Cubic-bezier pour un mouvement naturel)</li>
                                <li>Limiter les animations simultanées</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="css-responsive">
                    <h2 className="css-responsive__h2">Responsive CSS</h2>
                    <div className="css-responsive__demo-container" style={{width: `${width}px`}}>
                        {Array.from({length: 20}, (_, i) => (
                            <div key={i} className={`bloc bloc-${i + 1}`}></div>
                        ))}
                    </div>
                    <input className="css-responsive__input" type="range" min="100" max="300" value={width} onChange={(e) => setWidth(e.target.value)} />
                    <div className="border">
                        <div className="border__detail-card">
                            <h4 className="border__detail-card--paragraph">Organiser les éléments pour qu'ils s'adaptent aux différentes tailles d'écrans.</h4>
                            <ul className="border__detail-card--sub-paragraph">
                                <li>Media queries (BreakPoints)</li>
                                <li>Unités relatives (%, vw/vh, rem/em..)</li>
                                <li>Mise en page (Grid/Flexbox adaptatifs..)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <div className="responsive-bloc">
                <section className="js-event">
                    <h2 className="js-event__h2">DOM - Events JavaScript</h2>
                    <div className="js-event__group">
                        <button onMouseDown={startPress} onMouseUp={stopPress} onMouseLeave={stopPress} onTouchStart={startPress} onTouchEnd={stopPress} className="js-event__group--btn"><i className="fa-solid fa-play"></i></button>
                        <div className="js-event__group--loader">
                            {Array.from({length: 20}, (_, i) => (
                                <div 
                                    key={i} 
                                    className="loader-bar"
                                    style={{opacity: progress >= (i + 1) * 5 ? 1 : 0}}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="border">
                        <div className="border__detail-card">
                            <h4 className="border__detail-card--paragraph">Intégrer des événements qui réagissent aux interactions avec l'utilisateur.</h4>
                            <ul className="border__detail-card--sub-paragraph">
                                <li>Souris (Clic, hover, mouseEnter/leave..)</li>
                                <li>Clavier (keydown, keyup, keypress..)</li>
                                <li>Formulaires (submit, change, input..)</li>
                            </ul>
                        </div>
                    </div>
                </section>
                

                <section className="react">
                    <h2 className="react__h2">React</h2>
                    <div className="react__container">
                        <input type="color" onChange={(e) => setColor(e.target.value)} className="react__container--input"/>
                        <div className="react__container--card" style={{background: color}}>
                            <div className="card-bg">
                                <h4 className="card-h4" style={{color: color}}>Choisir :</h4>
                                <p className="card-p" style={{color: color}}>Une couleur dans le sélecteur.</p>     
                            </div>
                        </div>
                    </div>
                    <div className="border">
                        <div className="border__detail-card">
                            <h4 className="border__detail-card--paragraph">Changer des éléments sans re-render.</h4>
                            <ul className="border__detail-card--sub-paragraph">
                                <li>Optimisation des images (compression Avif, lazy loading ...)</li>
                                <li>Minification (JS / CSS minifiés, tree-shaking ...)</li>
                                <li>Mise en cache (Navigateur, CDN ...)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <div className="responsive-bloc">
                <section className="redux">
                    <h2 className="redux__h2">Redux - partage de state</h2>
                        <div className="redux__counter-container">
                            <div className="redux__counter-container--box">
                                <div className="numbers">{count}</div>
                            </div>
                            <div className="redux__counter-container--box">
                                <div className="numbers">{count}</div>
                            </div>
                            <div className="redux__counter-container--box">
                                <div className="numbers">{count}</div>
                            </div>
                        </div>
                        <button onClick={() => dispatch(increment())} className="redux__btn">+ 1</button>
                        <div className="border">
                            <div className="border__detail-card">
                                <h4 className="border__detail-card--paragraph">Partager des états entre les différents composants.</h4>
                                <ul className="border__detail-card--sub-paragraph">
                                    <li>Etat UI global (Modals, thème, sideBar..)</li>
                                    <li>Etat serveurs/data (Résultats d'API, caches de ressources..)</li>
                                    <li>Etat d'authentification (Connexion user, token..)</li>
                                </ul>
                            </div>
                        </div>
                </section>

                <SortDemo />
            </div>            
        </main>
    )
}
export default Careers