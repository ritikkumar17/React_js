import React, { useState } from 'react'
import Childcomp from './Childcomp'

function Parentcomp() {

    // variables
    let course ="mca"
    let age=24
    let email ="ritikchugh17@gmail.com"
    
    //object
    let userObject={
         name :"munny",
         subject :"react",
         city:"ludhiana"
    }

    //array
    let userArray =["red","green","yellow"]

    //state
    let [color ,setColor] = useState("orange");
  return (
    <div>
      
       <Childcomp course={course} age={age} email={email} objdata ={userObject} arraydata ={userArray} statedata={color}/>

       <button onClick={()=>setColor("mango")}>Change state</button>
    </div>
  )
}

export default Parentcomp
