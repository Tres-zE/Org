import "./Colaborador.css"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo } = props.datos
    return <div className="colaborador">
        <div className="encabezado">
            <img src= {foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

//lo mandamos al componente Equipos
export default Colaborador