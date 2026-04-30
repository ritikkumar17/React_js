import React from 'react'

function Child({data}) {
  return (
    <div>
      <h1>This is child component</h1>
      <button onClick={data}>Enter to call Parent function.</button>
    </div>
  )
}

export default Child
