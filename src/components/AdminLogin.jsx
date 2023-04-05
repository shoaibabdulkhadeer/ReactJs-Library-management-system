import React, { useRef } from 'react'
import '../styles/Admin.css'
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {

 let AdminEmail = useRef(null)
 let Adminpassword = useRef(null)

let navigate= useNavigate()

let submit = () => {
  if(AdminEmail.current.value === "ak@gmail.com" && Adminpassword.current.value === "123"){
    navigate("/admin/home")
  }else{
    alert("Invalid Credentials")
  }
}


  return (
    <div className='AdminLogin'>
          
         <Link to="/"> <button className='back'> Back to Home </button> </Link> 

        <form action=" " onSubmit={submit}> 
         <h1>Admin Login</h1>

         <input  ref={AdminEmail} type="email" placeholder='Email' className='username' required/>
         <input  ref={Adminpassword} type="password" placeholder='Password' required/>


         <button>Login</button>
        </form>
        
        </div>
  )
}

export default AdminLogin