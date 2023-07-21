import "./App.scss";
import Figures from "./components/Figures";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Footer />
      <Figures />
    </div>
  );
}

export default App;
