import { useState } from "react";
import "./form.css"
import { createFormFirestore } from "../../services/firebase"

function Form() {

    const [ formData, setFormData ] = useState({
        nombre: "",
        email: "",
        consulta: "",
    });

    function onInputChange(e) {
        const inputName = e.target.name;
        const value = e.target.value;
        const newFormData = {...formData};
        newFormData[inputName] = value;
        setFormData(newFormData)
    }

    const submitHandler = e=>{
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const consulta = e.target.consulta.value;
        
       
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(nombre === "" || email === "" || consulta === ""){
            alert("Los campos no pueden estar vacios")
            return;
        }else if(email !== "" && !regexEmail.test(email)){
            alert("Email no valido");
            return;
        }else{createFormFirestore(formData).then(alert("Su consulta ha sido enviada"))

        }

        
        

    }

    

  return (
    <form className="form" onSubmit={submitHandler}>
        <div className="form-group mx-auto">
            <label >Nombre: </label>
            <input type="text" placeholder="Ingrese su nombre" className="form-control" name="nombre" value={formData.nombre} onChange={onInputChange}></input>
            
        </div>
        <div className="form-group mx-auto">
            <label >Email:</label>
            <input type="text" placeholder="Ingrese su email" className="form-control" name="email" value={formData.email} onChange={onInputChange}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group mx-auto">
            <label >Escriba su consulta:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="consulta" value={formData.consulta} onChange={onInputChange}></textarea>
            <button type="submit" className="btn btn-dark mx-auto mt-2" onSubmit={createFormFirestore}>Enviar</button>
        </div>
        
    </form>
  )
}

export default Form