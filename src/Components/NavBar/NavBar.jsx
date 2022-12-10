import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import './navBar.css'
import themeContext from "../../Storage/ThemeContext";



function NavBar() {


  const [darkMode, setDarkMode] = useState(false)
  const { darkColor1, darkColor2 } = useContext(themeContext)

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);


  useEffect(()=>{
    if(!darkMode){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    
    
<nav className="navBarClass navbar navbar-expand-lg " style={{backgroundColor: darkMode? darkColor1 : darkColor2, height: "75px"}}>
  <div className="container-fluid" >
    <Link className="navbar-brand" style={{ color: darkMode? "black" : "white"}} to="/">NAHUEL BRACCHITTA</Link>
    <label>
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}> 
    <div className="dark-mode-slider" >{darkMode ? "🌙" : "🔆"}</div>
    </button>
    </label>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link active" style={{ color: darkMode? "black" : "white"}} aria-current="page" >Home</Link>
        <Link to="/proyectos" className="nav-link" style={{ color: darkMode? "black" : "white"}}>Proyectos</Link>
        <Link to="/contacto" className="nav-link" style={{ color: darkMode? "black" : "white"}}>Contacto</Link>
      </div>
    </div>
  </div>
</nav>

  )
}

export default NavBar