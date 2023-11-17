import cellphone from "../../assets/home/desktop/image-hero-phone.png";
import circle from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import "./presentationCard.sass";
import Buttons from "../Buttons/Buttons";

const PresentationCard = () => {
  return (
    <section className="presentationCardContainer">
      <div className="textSide">
        <h3>Award-winning custom designs and digital branding solutions</h3>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>

        <Buttons buttonType="button" classname="baseWhite" buttonText="Learn More"/>
      </div>
      <figure className="imgsSide">
        <img className="cellAndcircle" id="presentationCell" src={cellphone} alt="This is technology to see the art!" />
        <img className="cellAndcircle" id="presentationCircle" src={circle} alt="" />
      </figure>
    </section>
  );
};

export default PresentationCard;
