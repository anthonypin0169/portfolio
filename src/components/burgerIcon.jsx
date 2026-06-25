import "./burgerIcon.scss"
function Icon ({onClick, className}) {
    return(
        <button onClick={onClick} className = {className}>
            <div className = "header__icon--stick stick-1"></div>
            <div className = "header__icon--stick stick-2"></div>
            <div className = "header__icon--stick stick-3"></div>
        </button>
    )
}
export default Icon