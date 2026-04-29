import React, { useRef } from 'react'

function Userefhook() {

    const firstnameref=useRef("")
    const lastnameref=useRef("")
    const emailref=useRef("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        const fname = firstnameref.current.value
        const lname = lastnameref.current.value
        const email = emailref.current.value

        let data = document.getElementById("result");
    data.innerHTML = "FirstName :" + fname +  " LastName :" + lname + " Email :" + email;
    }

    
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <label htmlFor='fname'>Firstname:</label>
        <input type="text" id="fname" ref={firstnameref} />
        <br/> <br/>

        <label htmlFor='lname'>Lastname:</label>
        <input type="text" id="lname" ref={lastnameref} />
        <br/> <br/>

        <label htmlFor='email'>Email:</label>
        <input type="email" id="email"  ref={emailref}/>
        <br/> <br/>

        <button type="submit">Submit</button>
      </form>

      <h1 id="result"></h1>
    </div>
  )
}

export default Userefhook
