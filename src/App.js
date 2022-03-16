import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import EducationWork from "./components/Education-Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <EducationWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App