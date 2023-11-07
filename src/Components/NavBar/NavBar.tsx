import { Link } from "react-router-dom"
import logo from "../../assets/shared/desktop/logo-light.png"
import "./navBar.sass"
const NavBar = () => {
  return (
    <div className="navContainer">
       <Link to={"/"} className="navLogo"> <span className="navDesigno">DESIGNO</span><img src={logo} alt="Logo from DESIGNO!"/></Link>
        <nav>
            <Link className="navlink" to={"about"}> OUR COMPANY </Link>
            <Link className="navlink" to={"location"}> LOCATIONS </Link>
            <Link className="navlink" to={"contact"}> CONTACT </Link>
        </nav>
    </div>
  )
}

export default NavBar