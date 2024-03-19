import { useContext } from "react"
import { PokemonContexto } from "./PokemonContexto"
import PokemonImage from "./PokemonImage"

const ComponenteNeto = () => {
  const {id} = useContext(PokemonContexto)

  return (
    <div>
      <h2>Neto</h2>
      <PokemonImage id={id+2} />
    </div>
  )
}

export default ComponenteNeto