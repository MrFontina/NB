import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Proyectos from "./Components/Proyectos/Proyectos";
import Footer from "./Components/Footer/Footer";


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>    
    <BrowserRouter>
    <NavBar/>
    
    <Routes>
    <Route path="/" element={<About/> } />  
    <Route path="/proyectos"  element={<Proyectos/>} />  
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
