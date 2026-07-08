import "./cards.scss"
function Card ({text, className, contentClass, src, alt, imageClass, onClick}) {
    return(
        <div className={className} onClick={onClick}>
            <div className={contentClass}>{text}
                <img
                src={src}
                alt={alt}
                className={imageClass}
                />
            </div>
            
        </div>
    )
}
export default Card