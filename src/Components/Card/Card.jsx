import "./card.css"
import { useState } from "react"


function Card(props){     

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
        <div className="box d-flex flex-column cardContainer"  onClick={cardSwitch}>
        <h2>{props.title}</h2>
        <img src={props.img} alt=""></img>
        {/* <button className="button mt-auto mx-auto" onClick={cardSwitch}>xxxx</button> */}
        </div>
        <div id="popup1" className="overlay" style={{display: cardState? "none" : null}}>
	    <div className="popup d-flex flex-column align-items-center">
		<h2>{props.poptitle}</h2>
		<button className="close" onClick={cardSwitch}>&times;</button>
		<div className="content">
            <p>
                {props.about}
            </p>			
		</div>
        <img src={props.gif} alt=""></img>
	    </div>
        </div>
        </>
        

    )
    

}

export default Card