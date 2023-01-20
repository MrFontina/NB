import { Link } from "react-router-dom"
import { useContext } from "react";
import './navBar.css'
import themeContext from "../../Storage/ThemeContext";



function NavBar() {


  const { darkMode, handleTheme, gradient13 } = useContext(themeContext)

  return (


    <nav className="navBarClass navbar navbar-expand-lg " style={{ background: darkMode ? gradient13 : "#272935", height: "75px",  }}>
      <div className="container-fluid" >
        <Link className="navbar-brand" style={{ color: darkMode ? "black" : "white" }} to="/">NAHUEL BRACCHITTA</Link>
        
        <button className="navbar-toggler btnToggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav menuNav" style={{ background: darkMode?  null : "#272935" }}>
          <label>
          <button className="dark-mode-toggle" onClick={handleTheme}>
            <div className="dark-mode-slider" >{darkMode ? "🌙" : "🔆"}</div>
          </button>
        </label>
            <Link to="/about" className="nav-link active linkMenu" style={{ color: darkMode ? "black" : "white" }} aria-current="page" >Sobre mi</Link>
            <Link to="/proyectos" className="nav-link linkMenu" style={{ color: darkMode ? "black" : "white" }}>Proyectos</Link>
            <Link to="/contacto" className="nav-link linkMenu" style={{ color: darkMode ? "black" : "white" }}>Contacto</Link>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default NavBar