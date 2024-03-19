import { useContext } from "react"
import { PokemonContexto } from "./PokemonContexto"


const Incrementar = () => {

  const {setId} = useContext(PokemonContexto)

  return (
    <div>
      <button
        onClick={
          () => {
            setId(
              (id) => id + 1
            )
          }
        }
        style={{width: "100px"}}
      >
        Mais
      </button>
    </div>
  )

}

export default Incrementar