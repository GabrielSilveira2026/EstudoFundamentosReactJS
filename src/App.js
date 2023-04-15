import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento'
import Form from './components/Form'
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Rendenização de Lista</h1>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
