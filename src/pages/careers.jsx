import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { show, increment } from "../store/counterSlice"
import "./careers.scss"
function Careers () {
   

    const [rotate, setRotate] = useState([false, false, false])
    const toggleCard = (index) => {
        setRotate(rotate.map((val, i) => i === index ? !val : val))
    }
    const [width, setWidth] = useState(200)


    const count = useSelector((state) => state.counter.count)
    const visible = useSelector((state) => state.counter.visible)
    const dispatch = useDispatch()


    const [color, setColor] = useState("#ffffff")



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
                <h2 className="css-responsive__h2">Responsive CSS</h2>
                <div className="css-responsive__demo-container" style={{width: `${width}px`}}>
                    {Array.from({length: 20}, (_, i) => (
                        <div key={i} className={`bloc bloc-${i + 1}`}></div>
                    ))}
                </div>
                <input className="css-responsive__input" type="range" min="100" max="300" value={width} onChange={(e) => setWidth(e.target.value)} />
            </section>

            <section className="redux">
                <h2 className="redux__h2">Redux - partage de state</h2>
                {visible ? 
                <>
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
                    
                    <div className="redux__counter-container">
                        <button className="redux__counter-container--btn"></button>
                        <button onClick={() => dispatch(increment())} className="redux__counter-container--btn">+ 1</button>
                    </div>
                </>    
                :
                    <div className="redux__counter-container">
                        <button onClick={() => dispatch(show())} className="redux__counter-container--btn open-btn"><i className="fa-solid fa-play"></i></button>
                    </div>
                }
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
            </section>

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
            </section>
        </main>
    )
}
export default Careers