import React from 'react'
import '../styles/Admin.css'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div className='AdminLogin'>
          
         <Link to="/"> <button className='back'> Back to Home </button> </Link> 

        <form action=" "> 
         <h1>Admin Login</h1>
         <input type="text" placeholder='Username' className='username' required/>
         <input type="text" placeholder='Password' required/>

         <button>Login</button>
        </form>
        
        </div>
  )
}

export default AdminLogin