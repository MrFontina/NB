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
        <div className='description'>
        <p className="about-text">
        Hola, soy un diseñador <strong>frontend</strong> apasionado por el mundo digital y la música. Siempre estoy en busca de nuevas formas de aprender y mejorar mis habilidades para crear proyectos innovadores y atractivos.
      </p>
      <p className="about-text">
        Aunque no tengo experiencia profesional en diseño web, he creado varios proyectos personales y colaborado en proyectos con amigos y familiares. En cada uno de ellos, he disfrutado explorando diferentes técnicas de diseño y codificación para lograr el resultado que imaginé.
      </p>
      <p className="about-text">
        Además de ser diseñador frontend, soy un <strong>músico</strong> de jazz profesional. Creo que mi experiencia en la música me ha ayudado a desarrollar habilidades como la creatividad, el trabajo en equipo y la atención al detalle, que son valiosas en el diseño web.
      </p>
      <p className="about-text">
        Mi objetivo como diseñador frontend es crear interfaces intuitivas y atractivas que sean fáciles de usar para los usuarios finales. Me esfuerzo por mantenerme actualizado con las últimas tendencias y técnicas en diseño y desarrollo web para poder crear experiencias digitales que sean relevantes y efectivas.
      </p>
      <p className="about-text">
        Cuando no estoy diseñando o tocando música, me gusta explorar nuevas tecnologías y aprender cosas nuevas. También disfruto de la lectura y los deportes al aire libre.
      </p>
      <p className="about-text">
        Estoy emocionado de compartir mi trabajo y experiencia contigo, y espero poder ayudarte a crear una experiencia digital impresionante. Si tienes alguna pregunta o estás interesado en trabajar juntos, ¡no dudes en ponerte en contacto conmigo!
      </p>
        </div>



        <div className='containerIcons'>
          <p className='iconsSubtitle'>Estas son algunas de las tecnologías que domino:</p>
          <div className="icons">
            
              <div className='icon'>
                <p><strong>HTML</strong></p>
                <img src={htmlIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
              </div>
              <div className='icon'>
                <p><strong>CSS</strong></p>
                <img src={cssIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
              </div>
              <div className='icon'>
                <p><strong>JAVASCRIPT</strong></p>
                <img src={jsIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
              </div>
              <div className='icon'>
                <p><strong>REACT</strong></p>
                <img src={reactIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
              </div>
              <div className='icon'>
                <p><strong>BOOTSTRAP</strong></p>
                <img src={bootstrapIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
              </div>
              <div className='icon'>
                <p><strong>GIT</strong></p>
                <img src={gitIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
              </div>
              <div className='icon'>
                <p><strong>SAAS</strong></p>
                <img src={saasIcon} style={{ height: '50px', margin: '10px' }} alt="" className="icon" />
              </div>
            
            
            {/* <div className='icons2'>

              



            </div> */}

          </div>
        </div>
      </div>
    </div>

  )
}

export default About