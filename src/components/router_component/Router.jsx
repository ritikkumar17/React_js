import React from 'react'
import {Link ,Routes ,Route, Navigate} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import Login from './Login'
import PageNotFound from './PageNotFound'
import College from './College'
import Students from './Students'
import Department from './Department'
import Details from './Details'
import User from './User'
import UserDetails from './UserDetails'

function Router() {
  return (
    <div>
    <Navbar/>


    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>

    {/* <Route path="*" element={<PageNotFound/>}/> */}
    <Route path="*" element={<Navigate to="/"/>}/>  


    {/* Nested Navigation */}

    <Route path="/college" element={<College/>}>
    {/* <Route path="students" element={<Students/>}/> */}
    <Route index element={<Students/>}/> 
    <Route path="department" element={<Department/>}/>
    <Route path="details" element={<Details/>}/>
    </Route>

    <Route path="/user" element={<User/>}/>
    <Route path="/user/:id" element={<UserDetails/>}/>
    
    </Routes>
    </div>
  )
}

export default Router
