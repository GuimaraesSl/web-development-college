import {Filho} from "./01Filho"

export const Pai = () => {
  return (
    <div>
      <h3>PAI: </h3>
      <Filho peso={90} altura={1.8}/>
    </div>
  )
}