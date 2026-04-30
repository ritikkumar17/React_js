import React, { useState } from 'react'
import { useFormStatus } from 'react-dom';


function UseFormStatus() {

    const [data,setData]=useState({
        fname:"",
        lname:"",
        email:""
    })

    const handleSubmit =async (FormData)=>{
        await new Promise((res) => setTimeout(res, 2000));

        const fname = FormData.get("fname")
        const lname = FormData.get("lname")
        const email = FormData.get("email")

        setData({fname , lname, email})
        console.log("Form Submitted")
    }

    const SubmitButton =()=>{
        const {pending} = useFormStatus();
        return(
            <button disabled={pending}>
               {pending ? "Submiting..." : "Submit"}
            </button>
        )
    }
  return (
    <div>
      <form action={handleSubmit}>
        <label htmlFor='fname'>FirstName:</label>
        <input type="text" id="fname" name="fname"/>
        <br/><br/>

        <label htmlFor='lname'>LastName:</label>
        <input type="text" id="lname" name="lname"/>
        <br/><br/>

        <label htmlFor='email'>Email:</label>
        <input type="text" id="email" name="email"/>
        <br/><br/>

        <SubmitButton/>
      </form>

      <h1>{data.fname}</h1>
      <h1>{data.lname}</h1>
      <h1>{data.email}</h1>
    </div>
  )
}

export default UseFormStatus
