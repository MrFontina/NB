import Card from "../Card/Card"
import { useContext } from "react"
import themeContext from "../../Storage/ThemeContext"
import image1 from "./1.png"
import image2 from "./2.png"
import image3 from "./3.png"
import gif1 from "./musicstore.gif"
import "./proyectos.css"



function Proyectos() {

  const { darkMode, darkest, gradient34, gradient45 } = useContext(themeContext)

  return (
    <>
    <div className="proyectos" style={{background: darkMode? gradient34 : darkest}}>
      <h2>PROYECTOS:</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione praesentium velit, nobis alias totam natus id neque asperiores, animi dignissimos cum, laborum cumque? Molestias fugiat architecto maxime aliquam dolore.</p>
    </div>
    
    <div className="container-fluid d-flex flex-wrap " style={{height:"1900px", background: darkMode? gradient45 : darkest}}>
    <Card title="React Ecommerce"
          img={image1}
          poptitle="React Commerce"
          about="Proyecto final para el curso de React JS. El objeto fue hacer un Ecommerce, con un carrito totalmente funcional, y que se genere una orden de compra que se envie a una base de datos (Firebase). No se tuvo en cuenta los estilos."
          gif={gif1}
          link="https://reactecommercebracchitta.netlify.app/"
          />

    <Card title="JS Ecommerce"
          img={image2}
          poptitle="JS Ecommerce"
          about="Proyecto final para el curso de JavaScript."
          gif={image2}
          link="https://jsecommersebracchitta.netlify.app/"

    />
          
    <Card title="Music Biographie"
          img={image3}
          poptitle="Music Biographie"
          about="Proyecto final para el curso de desarrollo web. Se utilizó HTML5, CSS3, Bootstrap y SASS."
          gif={image3}
          link="https://nahuelbracchitta.netlify.app/index.html"
    />
    
    </div>
      


    

    </>

  )
}

export default Proyectos