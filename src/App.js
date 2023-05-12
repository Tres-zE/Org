import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Header from './componentes/Header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Colaborador from './componentes/Colaborador';
import { act } from '@testing-library/react';
import Footer from './componentes/Footer';

function App() {
 //para usar useState se necesita importar y si o si debe estar dentro de una funcion y al inicio
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de Software e Instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/christianpva.png",
      nombre: "Cristian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "José Gonzalez",
      puesto: "Dev FullStack",
      fav: true
    }
  ])
 //usaremos Ternario --> condicion ? se muestra : no se muestra .....(en mostrarFormulario) o
 //condicion && seMuestra 

    //arreglo de objetos equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },

    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },

    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },

    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },

    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },

    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },

    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])

  const cambiarMostrar = () => { //esta funcion se la mandamos a MiOrg para las props
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador ", colaborador)
    //spread operator
    //con los 3 puntitos copiamos un valor que ya esta
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColabarador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Cambiar color de equipo
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //favorito
  const like = (id) =>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map ((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }

      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      {/*{Header} forma 1 para que aparezca la imagen  */}
      {/*<Header></Header>  forma 2 para que apareza la imagen */}
      <Header /> {/* forma 3 que utilizaremos */}
      {/* { mostrarFormulario ? <Formulario /> : <></> } Ternario */}
      { 
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        crearEquipo = {crearEquipo}
        /> 
      }
      
      <MiOrg cambiarMostrar = { cambiarMostrar }/>

      {/* {esta arrowfunction es para los equipos usando el arreglo
        arrowFunction modo principiante:

        equipos.map( (equipo) => {
          cada vez que trabajemos con map, se le pone key para un identificador unico, una propiedad del objeto que es unica y no nos de errores
          return <Equipo datos={equipo} key={equipo.titulo}/>
        } )
      } */}

        {
            //modo pro
            equipos.map( (equipo) => <Equipo 
                datos={equipo} 
                key={equipo.titulo}
                colaboradores = {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
                eliminarColaborador = {eliminarColabarador}
                actualizarColor = {actualizarColor}
                like={like}
                />
              //cada vez que trabajemos con map, se le pone key para un identificador unico, una propiedad del objeto que es unica y no nos de errores
              
            )
        }

        <Footer/>
        
      
    </div>
  );
}

export default App;
