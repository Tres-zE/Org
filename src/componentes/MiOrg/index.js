import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks en espeacial el userState
    //usaremos la funcion de useState() de la sig manera
    //const [nombreVariable,funcionActualizar]= useState(valorInicial)
    // const [mostrar,actualizarMostrar] = useState(true)

    // const manejarClick = () =>{
    //     console.log("mostrar/ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="titulo">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg
//se exporta a App.js