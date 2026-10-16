import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Motion from "./components/Motion/Motion";
import Hero from "./sections/Hero/Hero";
import Stats from "./sections/Stats/Stats";
import About from "./sections/About/About";
import Highlights from "./sections/Highlights/Highlights";

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
        <Highlights />
      </main>
      <Footer />
    </>
  );
}

export default App;
