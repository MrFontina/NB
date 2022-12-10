import "./card.css"
import { useState } from "react"


function Card(props){

    // const hidePop = {
    //     transition: "opacity 500ms",
    //     visibility: "hidden",
    //     opacity:"0",
    // }

     

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
        <div className="box">
        <button onClick={cardSwitch}>xxxx</button>
	    {/* <a className="button" href="#popup1">Titulo:{props.title}</a> */}
        </div>
        <div id="popup1" className="overlay" style={{display: cardState? "none" : null}}>
	    <div className="popup">
		<h2>Here i am</h2>
		<button onClick={cardSwitch}>x</button>
		<div className="content">
			Thank to pop me out of that button, but now i'm done so you can close this window.
		</div>
	    </div>
        </div>
        </>
        

    )
    

}

export default Card