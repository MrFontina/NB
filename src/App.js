import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
// import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>    
    <BrowserRouter>
    <NavBar/>
    <About/>
    <Routes>
    <Route path="/" />  
    <Route path="/demi" />  
    <Route path="/trabajos" />  
    <Route path="/contacto" />  
    </Routes>
    {/* <Form/> */}
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
