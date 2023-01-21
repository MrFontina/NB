import './index.css'

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Proyectos from "./Components/Proyectos/Proyectos";
import Contacto from "./Components/Contacto/Contacto";
import About from './Components/About/About';
// import Footer from "./Components/Footer/Footer";
import Whatsapp from './Components/Whatsapp/Whatsapp';
import { ThemeContextProvider } from "./Storage/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  


  return (
    <>
    <ThemeContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/> } />  
    <Route path="/proyectos"  element={<Proyectos/>} />  
    <Route path="/contacto"  element={<Contacto/>} />  
    <Route path="/about" element={<About/>} />
    </Routes>
    <Whatsapp/>
    {/* <Footer/> */}
    </BrowserRouter> 
    </ThemeContextProvider>    
    </>
  );
}

export default App;
