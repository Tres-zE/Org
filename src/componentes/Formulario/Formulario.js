import "./Formulario.css"
import CampoTexto from "../CampoTexto"

const Formulario = () =>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear un colaborador</h2>
            <CampoTexto />
            <CampoTexto />
            <CampoTexto />
            <CampoTexto />
        </form>
    </section>
}

export default Formulario