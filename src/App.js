import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Services from "./components/Services";
import StickyMenu from "./components/StickyMenu";
import Contact from "./components/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";

library.add(fas, faObjectGroup);

function App() {
  return (
    <div className="App bg-white font-poppins text-black scroll-smooth box-border">
      <div className="main">
        <Header />
        <Home />
        <About />
        <Education />
        <Skill />
        <Services />
        <Contact />
      </div>
      <StickyMenu />
    </div>
  );
}

export default App;
