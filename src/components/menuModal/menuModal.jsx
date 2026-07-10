import Nav from "../nav/nav"
import "./menuModal.scss"

function MenuModal ({isOpen, onClose}) {
    return(
        <>
        
            <div className={`overlay ${isOpen ? 'hide' : ''}`} onClick={onClose}>
                <nav className={`header__menuModal ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <div className="header__menuModal--group-1">
                        <Nav text = "Hobbies tech et ressources" redirection = "/projets" className = {`link link-grp1 ${isOpen ? 'slide' : ''}`}/>
                        <Nav text = "Certifications et témoignages" redirection = "/#certifications" className = {`link link-grp1 ${isOpen ? 'slide' : ''}`}/>
                        <Nav text = "À propos" redirection = "/#a-propos" className = {`link link-grp1 ${isOpen ? 'slide' : ''}`}/>
                        <Nav text = "Parcours" redirection = "/#parcours" className = {`link link-grp1 ${isOpen ? 'slide' : ''}`}/>
                    </div>  

                    <div className="header__menuModal--group-2">
                        <Nav text = "Mentions légales" redirection = "/mentions-legales" className = {`link link-grp2 ${isOpen ? 'slide-grp2' : ''}`}/>
                        <p className = {`link link-grp2 ${isOpen ? 'slide-grp2' : ''}`}>Tous droits réservés</p>
                    </div>
                </nav>
            </div>
            
        </>
    )
}
export default MenuModal