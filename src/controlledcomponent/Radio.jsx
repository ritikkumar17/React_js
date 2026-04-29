import React, { useState } from 'react'

function Radio() {
    const [gender,setGender]=useState("")

    const handleChange=(e)=>{
        setGender(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(gender)
    }
  return (
    <div>

    <form onSubmit={handleSubmit}> 
       <input type="radio" id="male" name="gender" value="male"  checked={gender === "male"} onChange={handleChange}/>
      <label htmlFor="male">Male:</label>

      <br/>

      <input type="radio" id="female" name="gender" value="female"  checked={gender === "female"} onChange={handleChange}/>
      <label htmlFor="female">Female:</label>

      <br/>   <br/>

      <button type="submit" >Submit</button> 
    </form> 

    
    </div>
  )
}

export default Radio
