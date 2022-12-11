import Card from "../Card/Card"
import { useContext } from "react"
import themeContext from "../../Storage/ThemeContext"
import image1 from "./1.png"
import gif1 from "./musicstore.gif"



function Proyectos() {

  const { darkColor3 } = useContext(themeContext)

  return (
    <>
      <h2 style={{backgroundColor:darkColor3}}>Proyectos:</h2>
    <div className="container-fluid d-flex flex-wrap mt-5" style={{height:"1200px"}}>
    <Card title="Sarlanga"
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