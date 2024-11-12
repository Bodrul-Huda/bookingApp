import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />

      <Promo />
      <AboutUs />
    </>
  );
}

export default App;
