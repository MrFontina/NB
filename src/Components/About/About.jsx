import './about.css'
import { useContext } from 'react'
import themeContext from "../../Storage/ThemeContext"
import htmlIcon from "./icons/html5.png"
import cssIcon from "./icons/css3.png"
import jsIcon from "./icons/js.png"
import reactIcon from "./icons/react.png"
import bootstrapIcon from "./icons/bootstrap.png"
import saasIcon from "./icons/saas.png"
import gitIcon from "./icons/git.png"


function About() {

  const { darkMode, gradient34, darkest } = useContext(themeContext)


  return (
    <div className='aboutC' style={{ background: darkMode ? gradient34 : darkest }}>
      <div className='aboutTitle'>
        <h2>QUIEN SOY</h2>
      </div>
      <div className='aboutContainer'>
        <p className='description'>Hola! <br/> Me llamo Nahuel Bracchitta. <br/> Soy músico profesional desde hace mas de 15 años. <br/> Durante los tiempos de pandemia decidí que no quería hacer solo una cosa en mi vida y comencé a estudiar programación. <br/> Actualmente me encuentro buscando trabajo como desarrollador frontend, desde Argentina para el resto del mundo.<br/>
        
        </p>
        
        
        <div className='containerIcons'>
          <p className='iconsSubtitle'>Las tecnologías que utilizo actualmente son:</p>
          <div className="icons">
            <div className='icons1'>
            <div className='icon'>
              <p>HTML</p>
              <img src={htmlIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
            </div>
            <div className='icon'>
              <p>CSS</p>
              <img src={cssIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
            </div>
            <div className='icon'>
              <p>JAVASCRIPT</p>
              <img src={jsIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
            </div>
            <div className='icon'>
              <p>REACT</p>
              <img src={reactIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
            </div>
            </div>
            <div className='icons2'>
            
            <div className='icon'>
              <p>BOOTSTRAP</p>
              <img src={bootstrapIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
            </div>
            <div className='icon'>
              <p>GIT</p>
              <img src={gitIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
            </div>
            <div className='icon'>
              <p>SAAS</p>
              <img src={saasIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
            </div>



            </div>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default About