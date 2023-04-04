import React from 'react'
import '../styles/Adminnavbar.css'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='navbar'>

      <ul>
       <Link to="/admin/home"> <li>Home</li> </Link>  
        <Link to="/admin/add-books"> <li>Add Books</li> </Link> 
        <Link to="/admin/add-users">  <li>Add Users</li>  </Link>
       <Link to="/admin/user-list">  <li>User-List</li> </Link>  
       <Link to="/">  <li>Log Out</li> </Link>  
      </ul>


        



    </div>
  )
}

export default AdminNavbar