import React, { useRef } from 'react'
import '../styles/Addusers.css'
import { useNavigate } from 'react-router-dom'

const AddUsers = () => {

  let navigate = useNavigate()

 let name = useRef(null)
 let email = useRef(null)
 let phoneNumber = useRef(null)


  let submit = (e) => {
    e.preventDefault()
     let data = {
      name: name.current.value,
      email: email.current.value,
      phoneNumber:phoneNumber.current.value,
  
     }
     fetch("http://localhost:4000/users",{
      method:'POST',
      headers:{"Content-Type":'application/json'},
      body:JSON.stringify(data)
  })
    alert('Success');
    navigate("/admin/user-list")
  }



  return (
    <div className='Addusers'>


      <form action="" onSubmit={submit} style={{marginLeft:"350px",marginTop:"55px",backgroundColor:"lightgray"}}>
        <h1>Add Users</h1>
        <label >Name</label>
        <input ref={name} type="text" placeholder='Enter Name' />

        <label>Email</label>
        <input ref={email} type="text" placeholder='Email' />

        <label> Contact </label>
        <input ref={phoneNumber} type="text" placeholder='Contact' />

        <button>Add User</button>

      </form>



    </div>
  )
}

export default AddUsers