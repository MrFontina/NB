// import Form from "../Form/Form"
import { useContext } from "react"
import themeContext from "../../Storage/ThemeContext"
import "./home.css"
import image from "./perfil.jpg"
import htmlIcon from "./icons/html5.png"
import cssIcon from "./icons/css3.png"
import jsIcon from "./icons/js.png"
import reactIcon from "./icons/react.png"
import bootstrapIcon from "./icons/bootstrap.png"

function Home() {

  const { darkMode, gradient34, gradient45, darkest } = useContext(themeContext)


  return (
    <div>
      <div className="container.fluid">
        <div className="title" style={{ textAlign: "center", height: "160px", background: darkMode ? gradient34 : darkest }}>
          <h2 >NAHUEL BRACCHITTA</h2>
          <h4 >FrontEnd Developer</h4>
        </div>
        <div className="row flex-wrap   aboutContainer" style={{ background: darkMode ? gradient45 : darkest }}>
          <div className="headerLeft col-lg-7 col-12">
            Hola! Con este sitio lanzo mi carrera como desarrollador Frontend. Las herramientas que actualmente manejo son: html5, css3, javascript, reactjs, sass y bootstrap. Estoy muy entusiasmado por seguir desarrollando!! Pueden entrar a mi repositorio de GitHub, y en la sección proyectos voy subiendo todo lo que voy trabajando. Estoy abierto a recibir sugerencias, por favor dejame tu comentario o consulta.<br></br>
            <div className="icons d-flex p-4">
              <img src={htmlIcon} style={{ height: '50px', margin: '10px' }} alt="" />
              <img src={cssIcon} style={{ height: '50px', margin: '10px' }} alt="" />
              <img src={jsIcon} style={{ height: '50px', margin: '10px' }} alt="" />
              <img src={bootstrapIcon} style={{ height: '50px', margin: '10px' }} alt="" />
              <img src={reactIcon} style={{ height: '50px', margin: '10px' }} alt="" />
            </div>
          </div>
          <div className="headerRight col-lg-5 col-12 "  >
            <img src={image} style={{ borderRadius: "50%", height: "60%" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home