import Nav from "../nav/nav"
import "./footer.scss"

function Footer () {
    return(
        <footer className="footer">
            <div className="footer__group group-1">
                <Nav text = "Hobbies tech et ressources" redirection = "/projets" className = "footer__group--link"/>
                <Nav text = "Certifications et témoignages" redirection = "/#certifications" className = "footer__group--link"/>
            </div>  

            <div className="footer__group group-2">
                <Nav text = "À propos" redirection = "/#a-propos" className = "footer__group--link"/>
                <Nav text = "Parcours" redirection = "/#parcours" className = "footer__group--link"/>
            </div>
            
            <div className="footer__group group-3">
                <Nav text = "Mentions légales" redirection = "/mentions-legales" className = "footer__group--link" />
                <h4 className = "footer__group--link" >Tous droits réservés</h4>
            </div>
        </footer>
    )
}
export default Footer