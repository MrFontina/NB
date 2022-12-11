import Card from "../Card/Card"
import { useContext } from "react"
import themeContext from "../../Storage/ThemeContext"
import image1 from "./1.png"
import gif1 from "./musicstore.gif"
import "./proyectos.css"



function Proyectos() {

  const { darkMode, darkest, gradient34, gradient45 } = useContext(themeContext)

  return (
    <>
    <div className="proyectos" style={{background: darkMode? gradient34 : darkest}}>
      <h2>PROYECTOS:</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione praesentium velit, nobis alias totam natus id neque asperiores, animi dignissimos cum, laborum cumque? Molestias fugiat architecto maxime aliquam dolore.</p>
    </div>
    
    <div className="container-fluid d-flex flex-wrap " style={{height:"1900px", background: darkMode? gradient45 : darkest}}>
    <Card title="React Ecommerce"
          img={image1}
          poptitle="Here i am"
          about="Thank to pop me out of that button, but now i'm done so you can close this window."
          gif={gif1}
          />
          
    <Card title="Soruyo"/>
    <Card title="Patente"/>
    </div>
      


    

    </>

  )
}

export default Proyectos