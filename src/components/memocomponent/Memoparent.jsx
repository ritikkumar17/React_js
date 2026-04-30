import React from 'react'
import { useState } from 'react';
import Memochild from './Memochild';

function Memoparent() {
    const [count,setCount]=useState(0);
  return (
    <div>
      <h1>React.memo</h1>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>

      <br/>
      <Memochild name="ritik"/>
    </div>
  )
}

export default Memoparent
