import "./cards.scss"
function Card ({text, className, contentClass, src, alt, imageClass, onClick}) {
    return(
        <div className={className} onClick={onClick}>
            <div className={contentClass}>{text}
                {src && (
                    <picture>
                        <source srcSet={src} type="image/avif" />
                        <img
                        src={src.replace(".avif", ".png")}
                        alt={alt}
                        className={imageClass}
                        />
                    </picture>
                )}
            </div>
            
        </div>
    )
}
export default Card