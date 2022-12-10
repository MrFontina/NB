import Card from "../Card/Card"
import { useContext } from "react"
import themeContext from "../../Storage/ThemeContext"


function Proyectos() {

  const { darkColor3 } = useContext(themeContext)

  return (
    <>
    <h2 style={{backgroundColor:darkColor3}}>Proyectos:</h2>
    <div>
    <Card title="Sarlanga"/>
    <Card title="Soruyo"/>
    </div>
    </>
    
  )
}

export default Proyectos