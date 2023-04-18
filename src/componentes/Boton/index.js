import "./Boton.css"

const Boton = (props) => {
    //children es una propiedad de props(checar elemtnos es inspeccionar) y todo lo que contenga children se mostrara en el boton
    return <button className="boton">{props.children}</button>
}

export  default Boton //esto se exporto a Formulario.js