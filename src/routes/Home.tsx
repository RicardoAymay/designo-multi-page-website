import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import PresentationCard from "../Components/PresentationCard/PresentationCard";
import SoftCards from "../Components/SoftCards/SoftCards";

const Home = () => {
  return (
    <>
      <NavBar nameOfClass="navContainerHead" light="dark" />
      <main>
        <PresentationCard />
        <SoftCards />
      </main>
      <Footer />
    </>
  );
};

export default Home;
