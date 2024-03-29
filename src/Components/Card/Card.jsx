import "./card.css"
import { useState } from "react"
import { useContext } from "react";
import themeContext from "../../Storage/ThemeContext";



function Card(props){     

    const { darkMode, gradient51 } = useContext(themeContext)

    const [ cardState, setCardState ] = useState(true);

    function cardSwitch(){
        if(!cardState){
            setCardState(true)
        }else{
            setCardState(false)
        }

    }

    return(
        <>
        <div className="box d-flex flex-column"  onClick={cardSwitch} style={{background: darkMode? gradient51 : "lightgrey"}}>
        <h2>{props.title}</h2>
        <img src={props.img} alt="" className="cardImg"></img>
        <button type="button" className="btn btn-success">Ver más</button>
        </div>        
         <div id="popup1" className="overlay" style={{display: cardState? "none" : null, }}>
	    <div className="popup d-flex flex-column align-items-center" style={{backgroundColor: darkMode? "lightblue" : "lightgrey"}}>
		<h2>{props.poptitle}</h2>
		<button className="close" onClick={cardSwitch}>&times;</button>
		<div className="content">
            <p>
                {props.about}
            </p>
            <p >LINK: <a href={props.link} target="_blank" style={{textAlign:"center"}} rel='noreferrer'  >{props.link}</a> </p>            			
            <p >CÓDIGO: <a href={props.git} target="_blank" style={{textAlign:"center"}} rel='noreferrer'  >{props.git}</a> </p>            			
		</div>
        <a href={props.link} target="_blank" style={{textAlign:"center"}} rel='noreferrer'>
          <img src={props.gif} alt=""></img>  
        </a>
        
	    </div>
        </div>          
        </>
        

    )
    

}

export default Card