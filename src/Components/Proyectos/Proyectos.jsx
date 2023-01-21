import Card from "../Card/Card"
import { useContext } from "react"
import themeContext from "../../Storage/ThemeContext"
import gif1 from "./musicstore.gif"
import gif2 from "./juan.gif"
import gif3 from "./nbgif.gif"
import gif4 from "./gif4.gif"
import gif5 from "./gif5.gif"
import gif6 from "./gif6.gif"
import "./proyectos.css"
import image4 from "./e1.png"
import image5 from "./e2.png"
import image6 from "./e3.png"



function Proyectos() {

      const { darkMode, darkest, gradient34, gradient45 } = useContext(themeContext)

      return (
            <>
                  <div className="contenedorProyectos" style={{ background: darkMode ? gradient34 : darkest }}>
                        <div className="proyectosTitle" >
                              <h2>PROYECTOS</h2>
                              {/* <p>Estas fueron mis primeras experiencias aprendiendo a desarrollar. Pronto subiré proyectos nuevos.</p> */}
                        </div>

                        <div className="container-fluid d-flex flex-wrap containerProyectos" >

                              <Card title="Movies API"
                                    img={image6}
                                    poptitle="Movies API"
                                    about="Desarrollo de sitio de peliculas como parte del bootcamp de Alkemy, lee un listado de una api, tiene un buscador y una seccion de agregar a favoritos."
                                    gif={gif4}
                                    link="https://alkemymoviesnb.netlify.app/"
                                    git="https://github.com/MrFontina/AlkemyMovies2"
                              />

                              <Card title="Music Biography"
                                    img={image5}
                                    poptitle="Music Biography"
                                    about="Proyecto final para el curso de desarrollo web. Se utilizó HTML5, CSS3, Bootstrap y SASS. Es un sitio totalmente responsive."
                                    gif={gif3}
                                    link="https://nahuelbracchitta.netlify.app/index.html"
                                    git="https://github.com/MrFontina/proyectofinal"
                              />

                              <Card title="WindBnb"
                                    img={image6}
                                    poptitle="WindBnb"
                                    about="Sitio en proceso estilo AirBnb. Copiado a partir de un diseño de Figma."
                                    gif={gif6}
                                    link="https://nbwindbnb.netlify.app/"
                                    git="https://github.com/MrFontina/windbnb"
                              />


                              <Card title="React Ecommerce"
                                    img={image4}
                                    poptitle="React Commerce"
                                    about="Proyecto final para el curso de React JS. El objeto fue hacer un Ecommerce, con un carrito totalmente funcional, y que se genere una orden de compra que se envie a una base de datos (Firebase). No se tuvo en cuenta los estilos."
                                    gif={gif1}
                                    link="https://reactecommercebracchitta.netlify.app/"
                                    git="https://github.com/MrFontina/reactBracchitta"
                              />

                              <Card title="JS Ecommerce"
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
                              />


                        </div>

                  </div>



            </>

      )
}

export default Proyectos