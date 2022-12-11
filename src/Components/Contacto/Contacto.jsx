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
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa debitis accusamus corporis amet ipsam, eligendi doloribus! Culpa quas libero fuga, accusamus corrupti inventore temporibus iure, a illum aspernatur et dolor.</p>
        </div>
       
    <Form/> 
    </div>
   
    )
    
}

export default Contacto