

const PokemonImage = ({id}) => {

  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

  return (
    <div>
      <img 
        src={url + id + '.png'} 
        alt="Pokemon" 
        width={200}
      />
    </div>
  )

}

export default PokemonImage