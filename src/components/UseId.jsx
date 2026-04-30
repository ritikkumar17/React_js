import React, { useId } from 'react'

function UseId() {
  const id = useId()

  return (
    <div>
      <form>
        <label htmlFor={`${id}-fname`}>First Name:</label>
        <input type="text" id={`${id}-fname`} />
        <br/><br/>

        <label htmlFor={`${id}-lname`}>Last Name:</label>
        <input type="text" id={`${id}-lname`} />
        <br/><br/>

        <label htmlFor={`${id}-email`}>Email:</label>
        <input type="text" id={`${id}-email`} />
        <br/><br/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default UseId