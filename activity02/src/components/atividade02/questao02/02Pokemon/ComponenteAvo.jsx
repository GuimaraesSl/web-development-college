import ComponenteFilho from "./ComponenteFilho"
import { useState } from "react"
import { PokemonContexto } from "./PokemonContexto"
import PokemonImage from "./PokemonImage"
import Incrementar from "./Incrementar"
import Decrementar from "./Decrementar"

const ComponenteAvo = () => {
  const [id, setId] = useState(1)

  return (
    <PokemonContexto.Provider value={{id, setId}}>
      <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
        <Decrementar/>
        <Incrementar/>
      </div>
      <h2>Avo</h2>
      <PokemonImage id={id}/>
      <ComponenteFilho/>
    </PokemonContexto.Provider>
  )
}

export default ComponenteAvo