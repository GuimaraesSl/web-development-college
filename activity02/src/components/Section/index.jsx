import React from "react"

export const Section = ({children}) => {
  return (
    <section style={{backgroundColor: "#42f5bc", color: "white", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <h1>
        {children}
      </h1>
    </section>
  )
}