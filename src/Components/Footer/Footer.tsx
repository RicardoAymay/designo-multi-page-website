import NavBar from "../NavBar/NavBar";
import { addressInfo, contactInfo, socials } from "./footerInfo";
import "./footer.sass"
const Footer = () => {
  return (
    <footer>
      <div className="footerContent">
        <NavBar nameOfClass="navContainerFooter" light="light" />
        <div className="separator" />
        <div className="footerBottom">
          <div className="footerAddress">
            {addressInfo.map((el, i) => (
              <p key={el.id}>{el.text}</p>
            ))}
          </div>
          <div className="footerContact">
            {contactInfo.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
          <div className="footerSocial">
            {socials.map((el, i) => (
              <img key={i} src={el}/>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
