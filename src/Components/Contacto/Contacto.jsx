import Form from "../Form/Form";
import "./contacto.css"
import { useContext } from "react";
import themeContext from "../../Storage/ThemeContext";
import cv from './CV - Nahuel Bracchitta.pdf'
import gmail from './gmail.png'
import pdf2 from './pdf2.png'
import github from './github.png'
import linkedin from './linkedin.png'

function Contacto() {

    const { darkMode, darkest, gradient34 } = useContext(themeContext)

    return (
        <div className="contacto" style={{ background: darkMode ? gradient34 : darkest }}>
            <div className="contactoTitle">
                <h2>CONTACTO</h2>
                <div className="linksContacto">
                    <h5>Hoja de vida: <a href={cv} target="_blank" rel="noreferrer"><img src={pdf2} alt="" className="iconContacto" /></a></h5>
                    <h5>Perfil de Linkedin: <a href="https://www.linkedin.com/in/nahuel-bracchitta/" target="_blank" rel="noreferrer"><img src={linkedin} alt="" className="iconContacto" /></a></h5>
                    <h5>Repositorio de GitHub: <a href="https://github.com/MrFontina" target="_blank" rel="noreferrer"><img src={github} alt="" className="iconContacto" /></a></h5>
                    <h5>Email: <a href="mailto:nahuelbracchitta@gmail.com" target="_blank" rel="noreferrer"><img src={gmail} alt="" className="iconContacto" /></a></h5>
                </div>

                <p>O podés escribir en el formulario, aunque puedo demorar más en responder!</p>
            </div>

            <Form />
        </div>

    )

}

export default Contacto