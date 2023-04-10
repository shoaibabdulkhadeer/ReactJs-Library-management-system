import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {

  const logout = () => {
    alert("You have logged out Successfully")
  }

  return (
    <div className='navbar'>

      <ul>
        <Link to="/user/"> <li>Home</li> </Link>

        <Link to="/user/book-Lists"> <li> Book List </li></Link>
        <Link to="/" onClick={logout}> <li>Log Out</li> </Link>
      </ul>



    </div>
  )
}

export default UserNavbar