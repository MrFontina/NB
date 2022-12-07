import "./form.css"

function Form() {

    const submitHandler = e=>{
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const consulta = e.target.consulta.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(nombre === "" || email === "" || consulta === ""){
            alert("Los campos no pueden estar vacios")
            return;
        };

        if(email !== "" && !regexEmail.test(email)){
            alert("Email no valido");
            return;
        }

    }

  return (
    <form className="form" onSubmit={submitHandler}>
        <div className="form-group mx-auto">
            <label >Nombre: </label>
            <input type="text" placeholder="Ingrese su nombre" className="form-control" name="nombre"></input>
            
        </div>
        <div className="form-group mx-auto">
            <label >Email:</label>
            <input type="text" placeholder="Ingrese su email" className="form-control" name="email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group mx-auto">
            <label >Escriba su consulta:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="consulta"></textarea>
            <button type="submit" className="btn btn-dark mx-auto">Enviar</button>
        </div>
        
    </form>
  )
}

export default Form