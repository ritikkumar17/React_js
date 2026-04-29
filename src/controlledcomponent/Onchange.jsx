import React, { useState } from 'react'

function Onchange() {
    let [name , setName]=useState("")
    let [age , setAge]=useState("")
    let [email , setEmail]=useState("")
  return (
    <div>
    <label htmlFor="fname">Enter Name:</label>
      <input type='text' id="fname" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <br/> <br/>
      <label htmlFor="age">Enter Age:</label>
      <input type='text' id="age"  value={age}  onChange={(e)=>{setAge(e.target.value)}}/>
      <br/> <br/>
      <label htmlFor="email">Enter Email:</label>
      <input type='email' id="email"  value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
      <br/> <br/>

      <button>SUbmit</button>
      <button onClick={()=>{setName(""); setAge(""); setEmail("")}}>Clear Details</button>
    </div>
  )
}

export default Onchange
