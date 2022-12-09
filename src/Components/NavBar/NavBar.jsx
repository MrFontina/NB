import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import './navBar.css'



function NavBar() {


  const [darkMode, setDarkMode] = useState(false)

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
    if(darkMode){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    
    
<nav className="navBarClass navbar navbar-expand-lg bg-light " style={{height:"75px"}}>
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">NAHUEL BRACCHITTA</Link>
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
        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        <Link to="/proyectos" className="nav-link" >Proyectos</Link>
        {/* <Link className="nav-link" >Pricing</Link> */}
        {/* <Link className="nav-link disabled">Disabled</Link> */}
      </div>
    </div>
  </div>
</nav>

  )
}

export default NavBar