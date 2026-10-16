import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Motion from "./components/Motion/Motion";
import Hero from "./sections/Hero/Hero";
import Stats from "./sections/Stats/Stats";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Motion />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
