import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
        <h1>Login As...?</h1>
       <Link to="/admin"> Admin Login</Link>
       <Link to="/userlogin"> User Login </Link>


    </div>
  )
}

export default Home