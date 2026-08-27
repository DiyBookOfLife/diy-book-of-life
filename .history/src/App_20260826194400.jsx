import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import TrustBar from "./components/TrustBar";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
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
      </main>
    </>
  );
}

export default App;