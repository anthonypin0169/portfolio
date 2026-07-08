import Icon from "../burgerIcon/burgerIcon"
import MenuModal from "../menuModal/menuModal"
import Nav from "../nav/nav"
import { useState } from "react"
import "./header.scss"

function Header () {

    const [menuModalIsOpen, setMenuModalIsOpen] = useState(false)
    const [iconAnimation,setIconAnimation] = useState("")

    return(
        <header className = "header">
            <MenuModal isOpen = {menuModalIsOpen} onClose = {() => {setMenuModalIsOpen(false); setIconAnimation("land")}}/>
            <Icon isOpen={menuModalIsOpen} onClick={() => {
                if (menuModalIsOpen) {
                    setIconAnimation("land")
                    setMenuModalIsOpen(false)
                } else {
                    setIconAnimation("jump")
                    setMenuModalIsOpen(true)
                }
            }} 
            className = "header__icon" animation = {iconAnimation}/>
            <nav className = "header__nav">
                <Nav text = "Accueil" redirection = "/#accueil" className = "header__nav--link"/>
                <Nav text = "Compétences" redirection = "/competences" className = "header__nav--link"/>
                <Nav text = "Projets" redirection = "/projets" className = "header__nav--link"/>
                <Nav text = "Contact" redirection = "/contact" className = "header__nav--link"/> 
            </nav>    
        </header>
        )
}
export default Header