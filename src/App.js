import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {
 //para usar useState se necesita importar y si o si debe estar dentro de una funcion y al inicio
  const [mostrarFormulario, actualizarMostrar] = useState(true)
 //usaremos Ternario --> condicion ? se muestra : no se muestra .....(en mostrarFormulario) o
 //condicion && seMuestra 

  const cambiarMostrar = () => { //esta funcion se la mandamos a MiOrg para las props
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      {/*{Header} forma 1 para que aparezca la imagen  */}
      {/*<Header></Header>  forma 2 para que apareza la imagen */}
      <Header /> {/* forma 3 que utilizaremos */}
      {/* { mostrarFormulario ? <Formulario /> : <></> } Ternario */}
      { mostrarFormulario && <Formulario /> }
      
      <MiOrg cambiarMostrar = { cambiarMostrar }/>
    </div>
  );
}

export default App;
