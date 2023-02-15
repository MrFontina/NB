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
          <p>
            Hola, soy un diseñador frontend apasionado por el mundo digital y la música. <br/>Siempre estoy en busca de nuevas formas de aprender y mejorar mis habilidades para crear proyectos innovadores y atractivos.<br/>
          
            Aunque no tengo experiencia profesional en diseño web, he creado varios proyectos personales y colaborado en proyectos con amigos y familiares.<br/> En cada uno de ellos, he disfrutado explorando diferentes técnicas de diseño y codificación para lograr el resultado que imaginé.<br/>
          
            Además de ser diseñador frontend, soy un músico de jazz profesional. <br/>Creo que mi experiencia en la música me ha ayudado a desarrollar habilidades como la creatividad, el trabajo en equipo y la atención al detalle, que son valiosas en el diseño web.<br/>
          
            Mi objetivo como diseñador frontend es crear interfaces intuitivas y atractivas que sean fáciles de usar para los usuarios finales.<br/> Me esfuerzo por mantenerme actualizado con las últimas tendencias y técnicas en diseño y desarrollo web para poder crear experiencias digitales que sean relevantes y efectivas.<br/>
          
            Cuando no estoy diseñando o tocando música, me gusta explorar nuevas tecnologías y aprender cosas nuevas. <br/>También disfruto de la lectura y pasar tiempo al aire libre con amigos.<br/>
          
            Estoy emocionado de compartir mi trabajo y experiencia contigo, y espero poder ayudarte a crear una experiencia digital impresionante. <br/>Si tienes alguna pregunta o estás interesado en trabajar juntos, ¡no dudes en ponerte en contacto conmigo!<br/>
          </p>
        </div>



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