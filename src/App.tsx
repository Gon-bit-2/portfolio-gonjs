import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Project from "./sections/Project";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
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
