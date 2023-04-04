import React from 'react'
import { Routes , Route } from 'react-router-dom'
import AdminHome from '../components/AdminHome'
import UserList from '../components/UserList'
import AdminNavbar from '../components/AdminNavbar'
import '../styles/Adminportal.css'
import AddBooks from '../components/AddBooks'
import AddUsers from '../components/AddUsers'

const Adminportal = () => {
  return (
    <div className='Adminportal' >

   
      <AdminNavbar  />

          <Routes >
              <Route path='/home' element={<AdminHome />}/>
              <Route path='/user-list' element={<UserList />}/>
              <Route  path='/add-books' element={<AddBooks />}/>
              <Route path='/add-users' element={<AddUsers />} />

          </Routes>

        
        
        </div>
  )
}

export default Adminportal