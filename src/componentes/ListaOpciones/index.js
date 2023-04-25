import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    /*
        para recorrer los arreglos en js o react utilizaremos un metodo llamado MAP
        arreglo.map((equipo(esta es la variable), index(la inicializacion en 0))=>{
            return <option></option>
        })
    */ 
   //eliminamos el map para que solo haya 1 en todo el codigo y no tengamos que modificar en donde esten los demas arreglos y accedemos con props en la linea 30
    // const equipos = [
    //     "Programacion",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Movil",
    //     "Innovacion y Gestion"
    // ]

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map( (equipos, index) => <option key = {index} value={equipos}>{equipos}</option>
             )}
        </select>
    </div>
}

export default ListaOpciones