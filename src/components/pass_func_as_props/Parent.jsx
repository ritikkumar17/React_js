import React from 'react'
import Child from './Child'

function Parent() {
    const pfunc=()=>{
        alert("This is parent function")
    }
  return (
    <div>
      <h1>This is parent function</h1>
      <Child data={pfunc}/>
    </div>
  )
}

export default Parent
