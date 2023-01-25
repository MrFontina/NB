// import Form from "../Form/Form"
import { useContext } from "react"
import themeContext from "../../Storage/ThemeContext"
import "./home.css"
import perfil from "./perfil.jpg"


// import htmlIcon from "./icons/html5.png"
// import cssIcon from "./icons/css3.png"
// import jsIcon from "./icons/js.png"
// import reactIcon from "./icons/react.png"
// import bootstrapIcon from "./icons/bootstrap.png"

function Home() {

  const { darkMode, gradient34, darkest } = useContext(themeContext)


  return (
    
      <div className=" about" style={{ background: darkMode ? gradient34 : darkest }} >
          
            <div className="containerTyped">
            <h3>me llamo Nahuel Bracchitta</h3><br />
            <h4  className="typed">soy desarrollador frontend</h4>
          </div>
          <img src={perfil}  className="perfil" alt="" />
          
          
            
          </div>
        
  )
}

export default Home