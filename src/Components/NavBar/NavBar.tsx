import { Link } from "react-router-dom"
import logoDark from "../../assets/shared/desktop/logo-dark.png"
import logoLight from "../../assets/shared/desktop/logo-light.png"
import "./navBar.sass"
interface iNavBarProps{
  nameOfClass: string
  light: "light" | "dark"
}

const NavBar = ({nameOfClass, light}: iNavBarProps) => {
  return (
    <div className={nameOfClass}>
       <Link to={"/"} className="navLogoDark"><img src={light === "dark"? logoDark: logoLight } alt="Logo from DESIGNO!"/></Link>
        <nav>
            <Link className="navlink" to={"about"}> OUR COMPANY </Link>
            <Link className="navlink" to={"location"}> LOCATIONS </Link>
            <Link className="navlink" to={"contact"}> CONTACT </Link>
        </nav>
    </div>
  )
}

export default NavBar