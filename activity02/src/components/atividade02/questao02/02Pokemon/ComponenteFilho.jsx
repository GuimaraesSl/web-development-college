import { useContext } from "react"
import ComponenteNeto from "./ComponenteNeto"
import { PokemonContexto } from "./PokemonContexto"
import PokemonImage from "./PokemonImage"

const ComponenteFilho = () => {
  const {id} = useContext(PokemonContexto)

  return (
    <div>
      <h2>Filho</h2>
      <PokemonImage id={id+1}/>
      <ComponenteNeto/>
    </div>
  )
}

export default ComponenteFilho