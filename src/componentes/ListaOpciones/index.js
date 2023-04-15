import "./ListaOpciones.css"

const ListaOpciones = () => {
    /*
        para recorrer los arreglos en js o react utilizaremos un metodo llamado MAP
        arreglo.map((equipo(esta es la variable), index(la inicializacion en 0))=>{
            return <option></option>
        })
    */ 
    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map( (equipos, index) =><option key = {index}>{equipos}</option>
             )}
        </select>
    </div>
}

export default ListaOpciones