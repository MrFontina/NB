import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Proyectos from "./Components/Proyectos/Proyectos";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";

import { ThemeContextProvider } from "./Storage/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  


  return (
    <>
    <ThemeContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<About/> } />  
    <Route path="/proyectos"  element={<Proyectos/>} />  
    <Route path="/contacto"  element={<Contacto/>} />  
    </Routes>
    <Footer/>
    </BrowserRouter> 
    </ThemeContextProvider>    
    </>
  );
}

export default App;
