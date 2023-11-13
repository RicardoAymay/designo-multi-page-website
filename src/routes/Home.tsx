import NavBar from "../Components/NavBar/NavBar"
import PresentationCard from '../Components/PresentationCard/PresentationCard';
import ProjectPages from "../Components/ProjectPages/ProjectPages";

// import {c}
const Home = () => {
  return (
//  container
    <div className="container"> 
    <NavBar />
    <PresentationCard/>
    <ProjectPages/>
  </div> 
  )
}

export default Home