import React from 'react'
import { Routes , Route } from 'react-router-dom'
import AdminHome from '../components/AdminHome'
import UserList from '../components/UserList'
import AdminNavbar from '../components/AdminNavbar'
const Adminportal = () => {
  return (
    <div className='Adminportal' >

   
      <AdminNavbar />

          <Routes >
              <Route path='/home' element={<AdminHome />}/>
              <Route path='/book-list' element={<UserList />}/>

          </Routes>

        
        
        </div>
  )
}

export default Adminportal