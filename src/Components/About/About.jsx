import './about.css'
import htmlIcon from "./icons/html5.png"
import cssIcon from "./icons/css3.png"
import jsIcon from "./icons/js.png"
import reactIcon from "./icons/react.png"
import bootstrapIcon from "./icons/bootstrap.png"
import saasIcon from "./icons/saas.png"
import gitIcon from "./icons/git.png"

function About() {
  return (
    <div className='about'>
      <h1>QUIEN SOY</h1>
      <div>
        <p>Hola! Me llamo Nahuel Bracchitta. Soy músico profesional desde hace mas de 15 años. Durante los tiempos de pandemia decidí que no quería hacer solo una cosa en mi vida y comencé a estudiar programación. Actualmente me encuentro buscando trabajo como desarrollador frontend, desde Argentina para el resto del mundo.</p>
        <div>
          <p>Las tecnologías que utilizo actualmente son:</p>
          <div className="icons d-flex p-4">
            <div>
              <p>HTML</p>
              <img src={htmlIcon} style={{ height: '50px', margin: '10px'}} alt="" className="icon"/>
            </div>
            <div>
              <p>CSS</p>
              <img src={cssIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon"/>
            </div>
            <div>
              <p>JAVASCRIPT</p>
              <img src={jsIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon"/>
            </div>
            <div>
              <p>REACT</p>
              <img src={reactIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon"/>
            </div>
            <div>
              <p>BOOTSTRAP</p>
              <img src={bootstrapIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
            </div>
            <div>
              <p>GIT</p>
              <img src={gitIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
            </div>
            <div>
              <p>SAAS</p>
              <img src={saasIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default About