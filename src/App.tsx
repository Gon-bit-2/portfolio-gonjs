import { Loader } from "@react-three/drei";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Project from "./sections/Project";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Loader />
      <NavBar />
      <SideBar />
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
