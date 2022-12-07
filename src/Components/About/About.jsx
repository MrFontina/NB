import "./about.css"
import image from "./perfil.jpg"

function About() {

  

  return (
    <div className="hector">
    <div className="container.fluid p-3 ">
        <div className="row flex-wrap" >
            <div style={{textAlign:"center"}}>
              <h2>NAHUEL BRACCHITTA</h2>
              <h4>FrontEnd Developer</h4>
            </div>
            
            <div className="col-lg-7 col-12"  style={{backgroundColor:"pink", textAlign:"center", paddingTop:"120px", height:"500px"}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt dolor facere quam quis reprehenderit corrupti. Impedit architecto quis ducimus ad est non cum harum, sit, molestiae tempora itaque at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit voluptates fuga quo dolores consequatur dicta quos, rerum voluptatum saepe molestiae modi ipsa illum eaque non assumenda similique excepturi nobis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, nostrum reiciendis. Corrupti harum culpa eos. Ut aperiam repellendus esse dolore fugiat laborum nihil in, quo, cupiditate dicta repellat illum distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia autem, temporibus aperiam, dolore ullam dolorem quo suscipit nostrum nobis ab eius saepe pariatur tempora a rerum, cupiditate facere laborum dolorum!
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