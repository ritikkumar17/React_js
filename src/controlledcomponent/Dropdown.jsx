import React, { useState } from "react";

function Dropdown() {

    const [country,setCountry]=useState("")

    const handleChange =(e)=>{
        setCountry(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(country)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="country">Select Country:</label>

        <select id="country" name="country" onChange={handleChange}>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="england" >England</option>
          <option value="uk">UK</option>
        </select>

        <br />
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Dropdown;
