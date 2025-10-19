import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Scripting from "../Pages/Scripting";
import UIDesign from "../Pages/UIDesign";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Scripting />
      <UIDesign />
      <Skills />
      <Contact />
    </>
  );
}

export default App;