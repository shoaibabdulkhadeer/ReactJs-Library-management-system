import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserNavbar from '../components/UserNavbar'
import AdminHome from './AdminHome'
// import UserBookLists from '../components/UserBookLists'
import ReadBook from '../components/ReadBook'
import BookLists from '../components/BookLists'


const UserDashboard = () => {
  return (
    <div className='userdashboard' style={{ display: "flex" }}>

      <UserNavbar />
      <Routes>
        <Route path='/' element={<AdminHome />} />
        <Route path='/book-Lists' element={<BookLists />} />
        <Route path='/book-Lists/:id' element={<ReadBook />} />
      </Routes>

    </div>
  )
}

export default UserDashboard