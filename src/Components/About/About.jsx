import Form from "../Form/Form"

import "./about.css"
import image from "./perfil.jpg"
import htmlIcon from "./icons/html5.png"
import cssIcon from "./icons/css3.png"
import jsIcon from "./icons/js.png"
import reactIcon from "./icons/react.png"
import bootstrapIcon from "./icons/bootstrap.png"

function About() {

  

  return (
    <div className="hector">
    <div className="container.fluid p-3 ">
        <div className="row flex-wrap" >
            <div style={{textAlign:"center"}}>
              <h2>NAHUEL BRACCHITTA</h2>
              <h4>FrontEnd Developer</h4>
            </div>
            <Form/>
            
            <div className="col-lg-7 col-12 d-flex flex-column justify-content-center align-items-center"  style={{backgroundColor:"pink", textAlign:"center", paddingTop:"30px", height:"700px"}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt dolor facere quam quis reprehenderit corrupti. Impedit architecto quis ducimus ad est non cum harum, sit, molestiae tempora itaque at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit voluptates fuga quo dolores consequatur dicta quos, rerum voluptatum saepe molestiae modi ipsa illum eaque non assumenda similique excepturi nobis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, nostrum reiciendis. Corrupti harum culpa eos. Ut aperiam repellendus esse dolore fugiat laborum nihil in, quo, cupiditate dicta repellat illum distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia autem, temporibus aperiam, dolore ullam dolorem quo suscipit nostrum nobis ab eius saepe pariatur tempora a rerum, cupiditate facere laborum dolorum!<br></br>
            <div className="icons d-flex p-4">
             <img src={htmlIcon} style={{height:'50px', margin:'10px'}} alt=""/>
            <img src={cssIcon}  style={{height:'50px', margin:'10px'}}  alt=""/>
            <img src={jsIcon}  style={{height:'50px', margin:'10px'}}  alt=""/>
            <img src={bootstrapIcon}  style={{height:'50px', margin:'10px'}}  alt=""/>
            <img src={reactIcon}  style={{height:'50px', margin:'10px'}}  alt=""/> 
            </div>
            
        </div>
        <div className="headerRight col-lg-5 col-12 "  >
            <img src={image} style={{borderRadius: "50%", height: "60%" }} alt=""/>
            
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default About