import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    // const [valor, setValor] podemos utilizar set o
    //const [valor, actualizarValor] = useState("") solo es ejemplo
    const placeholderModificado = `${props.placeholder}...`

    //destructuracion
    const {type= "text"} = props

    const manejarCambio = (e) => {
        //e.target.value siempre se utiliza en inputs ya que esta es una de sus propiedades, e de evento
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
        />
    </div>
    
}

export default Campo