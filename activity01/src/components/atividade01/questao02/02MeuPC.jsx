const PlacaMae = ({nome, preco}) => {
  return (
    <div>
      <h2>Placa Mãe</h2>
      <h3>Nome: {nome}</h3>
      <h3>Preço: {preco}</h3>
    </div>
  )
}

const Memoria = ({nome, preco}) => {
  return (
    <div>
      <h2>Memoria</h2>
      <h3>Nome: {nome}</h3>
      <h3>Preço: {preco}</h3>
    </div>
  )
}

const PlacaDeVideo = ({nome, preco}) => {
    return (
    <div>
      <h2>Placa De Video</h2>
      <h3>Nome: {nome}</h3>
      <h3>Preço: {preco}</h3>
    </div>
  )
}

export {PlacaDeVideo, PlacaMae, Memoria};