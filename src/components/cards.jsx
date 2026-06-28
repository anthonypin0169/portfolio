import "./cards.scss"
function Card ({text, className, contentClass}) {
    return(
        <div className={className}>
            <div className={contentClass}>{text}</div>
        </div>
    )
}
export default Card