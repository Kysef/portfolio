import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="bg-[#0a0a0a] text-white">
      <div className="min-h-screen">
        <Navbar/>
        <About/>
        <Skills/>
      </div>
      <Projects/>
    </div>
  )
}

export default App