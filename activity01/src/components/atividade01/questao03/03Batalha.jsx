import { Children, cloneElement } from "react";

function Hero({name, imgURL, arena}){
  return (
    <div>
      <h3>Arena: {arena}</h3>
      <h3>Hero: {name}</h3>
      <img
        src={imgURL}
        alt="Baki Hero"
        width={200}
      />
    </div>
  )
}

function Enemy({name, imgURL, arena}){
  return (
    <div>
      <h3>Arena: {arena}</h3>
      <h3>Enemy: {name}</h3>
      <img
        src={imgURL}
        alt="Baki Enemy"
        width={200}
      />
    </div>
  )
}

function Arena({children, arena}){
  return (
    <div>
      <div style={{borderTop: '2px solid blue', margin: '10px 0 10px 0'}}/>
      <h3>Arena de Batalha {arena}</h3>
      {
        Children.map(
          children,
          (person, index) => {
            return cloneElement(person, { key: index, arena: arena});
          }
        )
      }
    </div>
  )
}

function World({children}){
  return (
    <div>
      {
        Children.map(
          children,
          (arena, index) => {
            return cloneElement(arena, { key: index });
          }
        )
      }
    </div>
  )
}

export {Arena, World, Enemy, Hero}
