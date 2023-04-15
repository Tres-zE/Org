
import './App.css';
import Header from './componentes/Header/header';
import Formulario from './componentes/Formulario/Formulario';

function App() {
  return (
    <div>
      {/*{Header} forma 1 para que aparezca la imagen  */}
      {/*<Header></Header>  forma 2 para que apareza la imagen */}
      <Header /> {/* forma 3 que utilizaremos */}
      <Formulario />
    </div>
  );
}

export default App;
