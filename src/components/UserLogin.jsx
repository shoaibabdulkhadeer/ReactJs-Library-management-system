import React from 'react'
import '../styles/Admin.css'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div className='AdminLogin'>
        
        <Link to="/"> <button className='back'> Back to Home </button> </Link> 

    <form action=" "> 
     <h1>User-Login</h1>
     <input type="text" placeholder='Username' className='username' required/>
     <input type="text" placeholder='Password' required/>

     <button>Login</button>
    </form>
    
    </div>
  )
}

export default UserLogin 