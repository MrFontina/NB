import { Link } from "react-router-dom"



function NavBar() {


  return (
    <nav className="navbar navbar-expand-lg pt-0" style={{backgroundColor:"#ffffff"}}>
  <div className="container-fluid" style={{backgroundColor:"red"}}>
    <Link className="navbar-brand mx-5 mt-3 mb-3" to="/">Nahuel Bracchitta</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarText">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" >Home</Link>
        </li>
        {/* <li className="nav-item d-flex align-items-center">
          <span >🌙</span>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar