import "./burgerIcon.scss"
function Icon ({onClick, isOpen, className, animation}) {
    return(
        <button onClick={onClick} aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={isOpen} className={`${className} ${isOpen ? "open" : ""} ${animation === "jump" ? "jump" : animation === "land" ? "land" : "" }`}>
            <div className={`header__icon--stick ${isOpen ? 'stick-1' : ''}`}></div>
            <div className={`header__icon--stick ${isOpen ? 'stick-2' : ''}`}></div>
            <div className={`header__icon--stick ${isOpen ? 'stick-3' : ''}`}></div>
        </button>
    )
}
export default Icon