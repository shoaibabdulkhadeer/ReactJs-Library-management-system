import React, { useRef } from 'react'
import '../styles/Admin.css'
import { Link, useNavigate } from 'react-router-dom'

const UserLogin = () => {

  let userName = useRef(null)
  let userpassword = useRef(null)
 
 let navigate= useNavigate()
 
   const submit = () => {
    if(userName.current.value === "ak@gmail.com" && userpassword.current.value === "123"){
      navigate('/user')
    }else {
      alert("Invalid credentials")
    }
   }

  return (
    <div className='AdminLogin'>
        
    <Link to="/"> <button className='back'> Back to Home </button> </Link> 

    <form action=" " onSubmit={submit}> 
     <h1>User-Login</h1>
     <input ref={userName} type="email" placeholder='Email' className='username' required/>
     <input ref={userpassword} type="password" placeholder='Password' required/>

     <button>Login</button>
    </form>
    
    </div>
  )
}

export default UserLogin 