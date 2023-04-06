import React from 'react'
import '../styles/Adminnavbar.css'
import { Link } from 'react-router-dom'


const AdminNavbar = () => {

 const logout = () => { 
 alert('You have logged out Successfully');
 }

  return (
    <div className='navbar'>

      <ul>
       <Link to="/admin/"> <li>Home</li> </Link>
       <Link to="/admin/add-users">  <li>Add Users</li>  </Link>  
        <Link to="/admin/add-books"> <li>Add Books</li> </Link> 
       <Link to="/admin/book-Lists"> <li> Book List </li></Link>
       <Link to="/admin/user-list">  <li>User-List</li> </Link>  
       <Link to="/" onClick={logout}>  <li>Log Out</li> </Link>  
      </ul>

    </div>
  )
}

export default AdminNavbar