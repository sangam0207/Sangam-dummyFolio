import React from 'react'
import './style/Dashboard.css'
import { Link } from 'react-router-dom';
function DashBoard() {
  return (
    <div className="dashboard">
      <h1>In Progress</h1>
      <Link to ='/'> Back to Home</Link>
    </div>
  )
}

export default DashBoard;