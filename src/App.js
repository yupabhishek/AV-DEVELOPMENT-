import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Facility } from "./components/Facility";
import { Plans } from "./components/Plans";
import { Projects } from "./components/Projects";
import { Founder } from "./components/Founder";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Facility />
      <Plans />
      <Projects />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;