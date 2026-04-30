import React from 'react'
import { useState } from 'react';


function DerivedState() {

    const [price,setPrice]=useState(100);
      const [qty,setQty]=useState(1);

      const total = price * qty;
  return (
    <div>
      <label>Price:</label>
      <input type="number" value={price}
        onChange={(e)=>{setPrice(Number(e.target.value))}}/>

        <br/><br/>

        <label>Quantity:</label>
      <input type="number" value={qty}
        onChange={(e)=>{setQty(Number(e.target.value))}}/>


     {/* Derived state output */}
     <h2>Total Price : {total}</h2>
    </div>
  )
}

export default DerivedState
