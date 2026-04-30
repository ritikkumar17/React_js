import React, { useRef } from 'react'
import Childref from './Childref';

function Parentref() {

    const inputRef= useRef("");

    const handleUpdate =()=>{
        inputRef.current.value="50000";
        inputRef.current.focus()
        inputRef.current.style.color="red"
    }
  return (
    <div>
    <Childref  ref={inputRef}/>
      <button onClick={handleUpdate}>Update the value</button>
    </div>
  )
}

export default Parentref
