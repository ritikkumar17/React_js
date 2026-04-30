import React from 'react'

function Memochild({name}) {
    console.log("child component render")
  return (
    <div>
      <h1>Child component</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default React.memo(Memochild) 
