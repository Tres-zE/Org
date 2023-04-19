import { useState } from "react"
import "./MiOrg.css"

const MiOrg = () => {
    //Estado - hooks en espeacial el userState
    //usaremos la funcion de useState()

    useState()

    const manejarClick = () =>{
        console.log("mostrar/ocultar elemento")
    }

    return <section className="orgSection">
        <h3 className="titulo">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={manejarClick}/>
    </section>
}

export default MiOrg
//se exporta a App.js