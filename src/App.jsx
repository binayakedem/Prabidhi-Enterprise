import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from './Pages/Home'
import Scroll from "./Components/Scroll"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Scroll/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
