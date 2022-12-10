import { useContext } from "react"
import themeContext from "../../Storage/ThemeContext"

function Proyectos() {

  const { darkColor1, color2 } = useContext(themeContext)

  return (
    <h2 style={{backgroundColor:darkColor1}}>caca</h2>
  )
}

export default Proyectos