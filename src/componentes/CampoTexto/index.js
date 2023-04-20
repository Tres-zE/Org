import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    // const [valor, setValor] podemos utilizar set o
    //const [valor, actualizarValor] = useState("") solo es ejemplo
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        //e.target.value siempre se utiliza en inputs ya que esta es una de sus propiedades, e de evento
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
        />
    </div>
    
}

export default CampoTexto