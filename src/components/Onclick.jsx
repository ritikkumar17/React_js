import React from 'react'

function Onclick() {

    function click(){
        alert("click function call.")
    }

    let fruit = (name)=>{
      alert(name)
    }
  return (
    <div>
      <h1>Click event</h1>
      <button onClick={click}>Click to call click function</button>
      <button onClick={()=>fruit("apple")}>Click to call fruit function</button>
    </div>
  )
}

export default Onclick
