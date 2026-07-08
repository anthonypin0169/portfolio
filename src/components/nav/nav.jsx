import { NavLink } from "react-router-dom"

function Nav ({text, redirection, className}) {
    return(
        <NavLink to = {redirection} className = {className}>{text}</NavLink>
    )
}
export default Nav