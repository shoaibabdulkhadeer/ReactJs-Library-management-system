import React, { useEffect, useState } from 'react'

const UserList = () => {
 
const [users,setUsers]  = useState([])

useEffect(() => {
   const FetchData = async () => {
         const response = await fetch("http://localhost:4000/users")
         const data = await response.json()
         setUsers(data)
   }
   FetchData()
},[])

  return (
    <div>
      
      {users.map((user)=> {
        return (
          <div style={{margin:"15px"}}> 
            <p>UserName - {user.name}</p>
            <p>UserMail - {user.email}</p>
            <p>PhoneNumber - +{user.phoneNumber}</p>

          </div>
        )
      })}

     

      
       
      </div>
  )
}

export default UserList