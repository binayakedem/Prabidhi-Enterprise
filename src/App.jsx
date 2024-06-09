import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from './Pages/Home'
import Scroll from "./Components/Scroll"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Aos from "aos"
import Career from "./Components/Career"
import SingleCareer from "./Components/singleCareer"
function App() {
  Aos.init();
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/career/:id" element={<SingleCareer/>}/>

    </Routes>
    <Scroll/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
