import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function College() {

  // container style
  const containerStyle = {
    textAlign: "center",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh"
  }

  // navbar style
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
    marginBottom: "30px"
  }

  // navlink style (active + normal)
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    fontWeight: "bold",
    color: isActive ? "#fff" : "#333",
    backgroundColor: isActive ? "#007bff" : "#e0e0e0",
    boxShadow: isActive 
      ? "0 4px 10px rgba(0,0,0,0.2)" 
      : "0 2px 5px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease"
  })

  return (
    <div style={containerStyle}>
      <h1>College Data</h1>

      {/* Navbar */}
      <div style={navStyle}>
        {/* <NavLink to="students" style={linkStyle}>Students</NavLink> */}
        <NavLink to="" style={linkStyle}>Students</NavLink>
        <NavLink to="department" style={linkStyle}>Department</NavLink>
        <NavLink to="details" style={linkStyle}>Details</NavLink>
      </div>

      {/* Child Routes Render Here */}
      <Outlet />
    </div>
  )
}

export default College