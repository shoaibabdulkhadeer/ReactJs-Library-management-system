import React from 'react'
import '../styles/Addusers.css'

const AddUsers = () => {
  return (
    <div className='Addusers'>


      <form action=""  style={{marginLeft:"350px",marginTop:"55px",backgroundColor:"lightgray"}}>
        <h1>Add Users</h1>
        <label >Name</label>
        <input type="text" placeholder='Enter Name' />

        <label>Email</label>
        <input type="text" placeholder='Email' />

        <label> Contact </label>
        <input type="text" placeholder='Contact' />

        <button>Add User</button>

      </form>



    </div>
  )
}

export default AddUsers