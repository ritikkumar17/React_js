import React, { useActionState } from 'react'

function UseActionState() {
    const[message,formAction,pending]=useActionState(handlesubmit,"")

    function handlesubmit(prevState , formData){
        let name = formData.get("fname");
        let email = formData.get("email");
        let pass = formData.get("pass");

        if(!name || !email || !pass){
            return 'Fill all the fields'
        }
        return "Thanks for submitting the details"
    }
  return (
    <div>
      <form action={formAction}>
        <input type="text" placeholder='Enter your name' name="fname"/>
        <br/><br/>

        <input type="text" placeholder='Enter your email' name="email"/>
        <br/><br/>

        <input type="text" placeholder='Enter your password' name="pass"/>
        <br/><br/>

        <button disabled={pending}>Submit</button>
      </form>

      <h1>{message}</h1>
    </div>
  )
}

export default UseActionState
