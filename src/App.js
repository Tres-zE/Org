import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {
 //para usar useState se necesita importar y si o si debe estar dentro de una funcion y al inicio
  const [mostrarFormulario, actualizarMostrar] = useState(false)
 //usaremos Ternario --> condicion ? se muestra : no se muestra .....(en mostrarFormulario) o
 //condicion && seMuestra 

  const cambiarMostrar = () => { //esta funcion se la mandamos a MiOrg para las props
    actualizarMostrar(!mostrarFormulario)
  }

  //arreglo de objetos equipos
  const equipos = [
    {
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },

    {
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },

    {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },

    {
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },

    {
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },

    {
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },

    {
      titulo:"Innovacion y Gestion",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ]

  return (
    <div>
      {/*{Header} forma 1 para que aparezca la imagen  */}
      {/*<Header></Header>  forma 2 para que apareza la imagen */}
      <Header /> {/* forma 3 que utilizaremos */}
      {/* { mostrarFormulario ? <Formulario /> : <></> } Ternario */}
      { mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}/> }
      
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
          equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo}/>
          //cada vez que trabajemos con map, se le pone key para un identificador unico, una propiedad del objeto que es unica y no nos de errores
          
        )
        }
        
      
    </div>
  );
}

export default App;
