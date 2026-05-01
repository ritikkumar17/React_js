import React from 'react'
import { Link, useParams } from 'react-router'


function UserDetails() {
  
  const paramsData=useParams();

  return (
    <div>
      <h1>This is UserDetail page</h1>
      <h2> UserId is : {paramsData.id}</h2>
      <Link to="/user">Back</Link>
    
    </div>
  )
}

export default UserDetails
