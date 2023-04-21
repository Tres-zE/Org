import "./Equipo.css"

const Equipo = (props) => { //props es un objeto, por lo tanto accederemos a sus propiedades

    //Destructuracion
    const {colorPrimario, colorSecundario, titulo} = props.datos


    const estiloTitulo ={
        borderColor: colorPrimario
    }
    
    const secundario ={
        backgroundColor: colorSecundario
    }
    return <section className="equipo" style={secundario}>
        <h3 style={estiloTitulo}>{titulo}</h3>

        <div className="colaboradores">

        </div>
    </section>
    
}

export default Equipo