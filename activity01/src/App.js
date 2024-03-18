import './App.css';
import { Divider } from './components/Divider';
import { Pai } from './components/atividade01/questao01/01Pai';
import * as PC from './components/atividade01/questao02/02MeuPC';
import { Arena, Enemy, Hero, World } from './components/atividade01/questao03/03Batalha';

function App() {
  const imgBakiURl = "https://i.scdn.co/image/ab67616d00001e02321e92131d04f43f43d3144c";
  const imgYujiroURL = "https://sportshub.cbsistatic.com/i/2021/03/18/d771a38f-4a6e-4adb-8b98-02587fce3f40/baki-yujiro-hanma-cosplay-1250390.jpg?width=1200";

  return (
    <div className="App">
      <h1>Questão 1</h1>
      <Pai/>
      <Divider/>
      <h1>Questão 2</h1>
      <h2>Meu PC</h2>
      <PC.PlacaMae nome="Modelo X" preco="500,00" />
      <PC.Memoria nome="DDR4 8GB" preco="200,00" />
      <PC.PlacaDeVideo nome="GTX 1650" preco="1000,00" />
      <Divider/>
      <h1>Questão 3</h1>
      <World>
        <Arena key="arena1" arena="Tokio Dome - Underground Arena 1">
          <Enemy name="Yujiro 1" imgURL={imgYujiroURL}/>
          <Hero name="Baki 1" imgURL={imgBakiURl}/>
        </Arena>
        <Arena key="arena2" arena="Tokio Dome - Underground Arena 2">
          <Enemy name="Yujiro 2" imgURL={imgYujiroURL}/>
          <Hero name="Baki 2" imgURL={imgBakiURl}/>
        </Arena>
        <Arena key="arena3" arena="Tokio Dome - Underground Arena 3">
          <Enemy name="Yujiro 3" imgURL={imgYujiroURL}/>
          <Hero name="Baki 3" imgURL={imgBakiURl}/>
        </Arena>
      </World>
    </div>
  );
}

export default App;
