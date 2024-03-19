import { useContext } from "react"
import { PokemonContexto } from "./PokemonContexto"


const Decrementar = () => {

  const {setId} = useContext(PokemonContexto)

  return (
    <div>
      <button
        onClick={
          () => {
            setId(
              (id) => id - 1
            )
          }
        }
        style={{width: "100px"}}
      >
        Menos
      </button>
    </div>
  )

}

export default Decrementar