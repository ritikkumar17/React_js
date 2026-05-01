import React from 'react'
import { Link } from 'react-router'
import "./header.css"

function Navbar() {
  return (
    <div className='header'>

    <div>
    <Link to="/"> <h1>Logo</h1></Link>
    </div>
      
      <ul>
        <li> <Link to="/"> <h1>Home</h1></Link></li>
        <li><Link to="/login"> <h1>Login</h1></Link></li>
        <li><Link to="/about"> <h1>About</h1></Link></li>
        <li><Link to="/college"> <h1>College</h1></Link></li>
        
        <li><Link to="/user"> <h1>User</h1></Link></li>
      </ul>
    </div>
  )
}

export default Navbar
