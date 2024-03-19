import './App.css';
import { Section } from './components/Section';
import ClassA from './components/atividade02/questao01/ClassContext';
import FunctionContextA from './components/atividade02/questao01/FunctionContextA';
import ComponenteAvo from './components/atividade02/questao02/02Pokemon/ComponenteAvo';

function App() {
  return (
    <div className="App">
      <header style={{backgroundColor: "#4287f5", color: "white", display: "flex", justifyContent: "center", alignItems: "center"}}><h1>Atividade02</h1></header>

      <Section>Questão 1</Section>
      <h2>Function:</h2>
      <FunctionContextA/>
      <h2>Class:</h2>
      <ClassA/>

      <Section>Questão 2 e Questão 3</Section>
      <ComponenteAvo/>
      


    </div>
  );
}

export default App;
