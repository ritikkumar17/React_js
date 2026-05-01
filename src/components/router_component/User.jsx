import React from 'react'
import { Link } from 'react-router'

function User() {
    const userDetail =[
        {name:"ritik",id:1},
        {name:"money",id:2},
        {name:"john",id:3},
        {name:"peter",id:4},
    ]
  return (
    <div>
      <h1>This is User List Page</h1>

      
        {userDetail.map((item)=>(
            <div>
            <h1><Link to={"/user/"+item.id}>{item.name}</Link></h1>
            </div>
           
        ))}
      
    </div>
  )
}

export default User
