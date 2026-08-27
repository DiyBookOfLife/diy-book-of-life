import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import TrustBar from "./components/TrustBar";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <TrustBar />
        <Pricing />
        <Process />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;