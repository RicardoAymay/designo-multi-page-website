import Buttons from "../Buttons/Buttons";
import "./floatCardStyle.sass";

const FloatCard = () => {
  return (
    <div className="floatContainer">
      <div className="floatTextDiv">
        <h3 className="floatTitle">Let's talk about your project</h3>
        <p className="floatSubtitle">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      
        <Buttons
          buttonText="GET IN TOUCH"
          classname="baseWhite"
          buttonType="button"
        />
     
    </div>
  );
};

export default FloatCard;
