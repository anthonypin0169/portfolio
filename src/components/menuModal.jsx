import Nav from "./nav"
import "./menuModal.scss"

function MenuModal ({isOpen, onClose}) {
    return(
        <>
            {isOpen && 
                <div className="overlay" onClick={onClose}>
                    <nav className="header__menuModal" onClick={(e) => e.stopPropagation()}>
                        <div className="header__menuModal--group-1">
                            <Nav text = "Certifications et témoignages" redirection = "/" className = "link"/>
                            <Nav text = "Hobbies tech et ressources" redirection = "/projets" className = "link"/>
                        </div>  

                        <div className="header__menuModal--group-2">
                            <Nav text = "Contact" redirection = "/contact" className = "link"/>
                            <Nav text = "Mentions légales" redirection = "/mentions-legales" className = "link"/>
                            <p className = "link">Tout droits réservés</p>
                        </div>
                    </nav>
                </div>
            }
        </>
    )
}
export default MenuModal