import Card from "../Card/Card"
import { useContext } from "react"
import themeContext from "../../Storage/ThemeContext"
import gif1 from "./musicstore.gif"
// import gif2 from "./juan.gif"
// import gif3 from "./nbgif.gif"
import gif4 from "./gif4.gif"
// import gif5 from "./gif5.gif"
import gif6 from "./gif6.gif"
import "./proyectos.css"
import image4 from "./e1.png"
import image5 from "./e2.png"
import image6 from "./e3.png"
import gifProSalud from './prosalud.gif'
import nbJazz from './nbjazz.gif'



function Proyectos() {

      const { darkMode, darkest, gradient34 } = useContext(themeContext)

      return (
            <>
                  <div className="Proyectos" style={{ background: darkMode ? gradient34 : darkest }}>
                        <div className="proyectosTitle" >
                              <h2>PROYECTOS</h2>
                              {/* <p>Estas fueron mis primeras experiencias aprendiendo a desarrollar. Pronto subiré proyectos nuevos.</p> */}
                        </div>

                        <div className="container-fluid d-flex flex-wrap containerProyectos" >

                        <Card       title="ProSaludWeb"
                                    img={image6}
                                    poptitle="ProSaludWeb"
                                    about="Web institucional para una empresa de medicina mexicana. Desarrollado en en un equipo de dos diseñadoras UX/UI y dos desarrolladores REACT "
                                    gif={gifProSalud}
                                    link="https://pro-salud-medical.vercel.app/"
                                    git="https://github.com/MrFontina/ProSaludMedical"
                              />


                        <Card       title="Nahuel Bracchitta jazz player"
                                    img={image6}
                                    poptitle="Music Biography"
                                    about="Mi sitio  personal sobre mi carrera musical. Totalmente responsive. Se utilizó React, HTML5, CSS3, Bootstrap y SASS."
                                    gif={nbJazz}
                                    link="https://nb-jazz.vercel.app/"
                                    git="https://github.com/MrFontina/NBJazz"
                              />

                              <Card title="React Ecommerce"
                                    img={image4}
                                    poptitle="React Commerce"
                                    about="Simulación de un Ecommerce de una tienda de instrumentos. Tiene un carrito totalmente funcional, que al terminar la compra envía una orden a una base de datos en Firebase. Se hizo completamente en React."
                                    gif={gif1}
                                    link="https://reactecommercebracchitta.netlify.app/"
                                    git="https://github.com/MrFontina/reactBracchitta"
                              />

                              

                              <Card title="Movies API"
                                    img={image5}
                                    poptitle="Movies API"
                                    about="Desarrollo de sitio de peliculas como parte del bootcamp de Alkemy, lee un listado de una api, tiene un buscador y una seccion de agregar a favoritos. Desarrollado en React"
                                    gif={gif4}
                                    link="https://alkemymoviesnb.netlify.app/"
                                    git="https://github.com/MrFontina/AlkemyMovies2"
                              />

                              <Card title="WindBnb"
                                    img={image6}
                                    poptitle="WindBnb"
                                    about="SITIO EN PROCESO. Estilo AirBnb. Copiado a partir de un diseño de Figma. Desarrollado en React"
                                    gif={gif6}
                                    link="https://nbwindbnb.netlify.app/"
                                    git="https://github.com/MrFontina/windbnb"
                              />


                              {/* <Card title="JS Ecommerce"
                                    img={image6}
                                    poptitle="JS Ecommerce"
                                    about="Proyecto final para el curso de JavaScript. No se tuvo en cuenta los estilos. No es responsive."
                                    gif={gif2}
                                    link="https://jsecommersebracchitta.netlify.app/"
                                    git="https://github.com/MrFontina/proyectoFinalJsCoder"

                              />



                              <Card title="Drum Kit JS"
                                    img={image5}
                                    poptitle="Drum Kit JS"
                                    about="JS app con sonidos de batería"
                                    gif={gif5}
                                    link="https://nbdrumkitjs.netlify.app/"
                                    git="https://github.com/MrFontina/basketballscore"
                              /> */}


                        </div>

                  </div>



            </>

      )
}

export default Proyectos