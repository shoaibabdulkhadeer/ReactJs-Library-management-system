import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import '../styles/userlist.css';

const UserList = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch("http://localhost:4000/users")
      const data = await response.json()
      setUsers(data)
    }
    FetchData()
  }, [users])


  const deluser = (id) => {

    alert("User Banned Permanently")
    fetch(`http://localhost:4000/users/${id}`, {
      method: 'DELETE'
    })


  }

  return (
    <div className='userlist'>

      {users.map((user) => {
        return (
          <div className='userInd' key={user.id}>
            <div className='imgdel'>
              <FaUserCircle size={80} style={{ marginBottom: "10px" }} />
              <button onClick={() => deluser(user.id)}>Ban User</button>
            </div>



            <div className='userinfo'>
              <div className='userkeys'>
                <p>User name </p>
                <p>User Mail </p>
                <p> Phone Number</p>
              </div>

              <div className='uservalues'>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>+{user.phoneNumber}</p>
              </div>

            </div>


          </div>
        )
      })}





    </div>
  )
}

export default UserList