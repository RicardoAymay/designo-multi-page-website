import "./style.sass";
import webDesignImage from "../../assets/home/desktop/image-web-design-large.jpg";
import appDesignImage from "../../assets/home/desktop/image-app-design.jpg";
import graphicDesignImage from "../../assets/home/desktop/image-graphic-design.jpg";
// import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProjectPages = () => {
  const navigate = useNavigate();

  return (
    <div className="projectPages">
      <div className="web">
        <img src={webDesignImage} alt="" />
        <div>
          <h1>WEB DESIGN</h1>
          <button onClick={() => navigate("/webdesign")}>
            VIEW PROJECTS
            {/* <IoIosArrowForward/> */}
          </button>
        </div>
      </div>

      <div className="container">
        <div className="app">
          <img src={appDesignImage} alt="" />
          <div>
            <h1>APP DESIGN</h1>
            <button onClick={() => navigate("/appdesign")}>
              VIEW PROJECTS
              {/* <IoIosArrowForward/> */}
            </button>
          </div>
        </div>

        <div className="graphic">
          <img src={graphicDesignImage} alt="" />
          <div>
            <h1>GRAPHIC DESIGN</h1>
            <button onClick={() => navigate("/graphic")}>
              VIEW PROJECTS
              {/* <IoIosArrowForward/> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPages;
