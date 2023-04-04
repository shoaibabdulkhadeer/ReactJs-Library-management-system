import React, { useRef } from 'react'
import '../styles/Admin.css'
import { Link, useNavigate } from 'react-router-dom'

const UserLogin = () => {

  let userName = useRef(null)
  let userpassword = useRef(null)
 
 let navigate= useNavigate()
 
   const submit = () => {
    if(userName.current.value === "user1" && userpassword.current.value === "123456"){
      navigate('/userportal')
    }else {
      alert("Invalid credentials")
    }
   }

  return (
    <div className='AdminLogin'>
        
    <Link to="/"> <button className='back'> Back to Home </button> </Link> 

    <form action=" " onSubmit={submit}> 
     <h1>User-Login</h1>
     <input ref={userName} type="text" placeholder='Email' className='username' required/>
     <input ref={userpassword} type="text" placeholder='Password' required/>

     <button>Login</button>
    </form>
    
    </div>
  )
}

export default UserLogin 