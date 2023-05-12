import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    //modelo SPA = Single Page Application; esto con la finalidad de no estar recargando la pagina cada vez que se crea un colaborador
    //en lugar de evento se puede utilizar event o e, son las mas utilizadas
    const manejarEnvio = (evento) =>{
        evento.preventDefault()//para que ya no recargue la pagina
        console.log("Manejar envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear un colaborador</h2>
            {/* las 2 required dan el mismo resultado que es un true */}
            <Campo 
                titulo = "Nombre" 
                placeholder="Ingresar nombre" 
                required={nombre} 
                actualizarValor={ actualizarNombre }
            />
            <Campo
                titulo = "Puesto" 
                placeholder="Ingresar puesto" 
                required = { puesto }
                actualizarValor = { actualizarPuesto }
            />
            <Campo
                titulo = "Foto" 
                placeholder="Ingresar enlace de foto" 
                required = {foto}
                actualizarValor = { actualizarFoto }
            />
            <ListaOpciones
                valor = { equipo }
                actualizarEquipo = { actualizarEquipo }
                equipos = {props.equipos}
            />
            <Boton>Crear</Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            {/* las 2 required dan el mismo resultado que es un true */}
            <Campo
                titulo = "Titulo" 
                placeholder="Ingresar titulo" 
                required={titulo} 
                actualizarValor={ actualizarTitulo }
            />
            <Campo
                titulo = "Color" 
                placeholder="Ingresar color en Hex" 
                required = { color }
                actualizarValor = { actualizarColor }
                type = "color"
            />

            <Boton>Registrar equipo</Boton>

        </form>
    </section>
}

export default Formulario