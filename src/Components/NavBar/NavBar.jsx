import { Link } from "react-router-dom"




function NavBar() {


  return (
    
    
<nav className="navBarClass navbar navbar-expand-lg bg-light " style={{height:"75px"}}>
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">NAHUEL BRACCHITTA</Link>
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