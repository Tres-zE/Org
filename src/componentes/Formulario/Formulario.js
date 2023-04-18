import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () =>{

    //modelo SPA = Single Page Application; esto con la finalidad de no estar recargando la pagina cada vez que se crea un colaborador
    //en lugar de evento se puede utilizar event o e, son las mas utilizadas
    const manejarEnvio = (evento) =>{
        evento.preventDefault()//para que ya no recargue la pagina
        console.log("Mnejar el envio", evento)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear un colaborador</h2>
            <CampoTexto titulo = "Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo = "Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo = "Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones/>
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario