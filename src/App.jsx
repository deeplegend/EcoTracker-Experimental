import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas} from './components'
import Calculator from "./components/Calculator"
const App = () => {
  return (
    <BrowserRouter>
     <div className="relative z-0 bg-primary">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Works/>
      <div className="relative z-0">
        <StarsCanvas/>
        <Contact/>
        <Calculator/>
      </div>
     </div>
    </BrowserRouter>
  )
}

export default App
