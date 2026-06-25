import Icon from "./burgerIcon"
import MenuModal from "./menuModal"
import Nav from "./nav"
import { useState } from "react"
import "./header.scss"

function Header () {

    const [menuModalIsOpen, setMenuModalIsOpen] = useState(false)

    return(
        <header className = "header">
            <MenuModal isOpen = {menuModalIsOpen} onClose = {() => setMenuModalIsOpen(false)}/>
            <Icon onClick = {() => setMenuModalIsOpen(true)} className = "header__icon"/>
            <nav className = "header__nav">
                <Nav text = "Accueil" redirection = "/" className = "header__nav--link"/>
                <Nav text = "Compétences" redirection = "/competences" className = "header__nav--link"/>
                <Nav text = "Projets" redirection = "/projets" className = "header__nav--link"/>
                <Nav text = "Á propos" redirection = "/#a-propos" className = "header__nav--link"/> 
            </nav>    
        </header>
        )
}
export default Header