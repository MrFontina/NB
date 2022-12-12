import Form from "../Form/Form";
import "./contacto.css"
import { useContext } from "react";
import themeContext from "../../Storage/ThemeContext";

function Contacto() {

    const { darkMode, darkest, gradient34 } = useContext(themeContext)

    return(
    <div className="contacto" style={{background: darkMode? gradient34 : darkest}}>
        <div className="contactoTitle">
           <h2>CONTACTO</h2> 
           <p>Dejame tu mensaje por cualquier propuesta, o sugerencia!</p>
        </div>
       
    <Form/> 
    </div>
   
    )
    
}

export default Contacto