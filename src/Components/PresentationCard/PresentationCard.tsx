import cellphone from "../../assets/home/desktop/image-hero-phone.png"
import circle from "../../assets/home/desktop/bg-pattern-hero-home.svg"
const PresentationCard = () => {
  return (
    <section>
      <h3>Award-winning custom designs and digital branding solutions</h3>
      <p>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <img src={cellphone} alt="This is technology to see the art!"/>
      <img src={circle} alt=""/>
    </section>
  );
};

export default PresentationCard;
