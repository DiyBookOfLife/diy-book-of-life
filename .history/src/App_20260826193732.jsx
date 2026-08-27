import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import "./styles.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
    </>
  );
}

export default App;