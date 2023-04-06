import React, { useEffect, useState } from 'react'
import '../styles/BookLists.css'
import { Link } from 'react-router-dom'

const BookLists = () => {

const [books, setBooks] = useState([])

useEffect(() => {
 const fetchData = async () => {
    const response = await fetch("http://localhost:4000/books")
    const data = await response.json()
    setBooks(data)
 }

 fetchData()
},[])
console.log(books)

  return (
    <div className='BookLists'>
      <h1>BookLists</h1>
      {books.map((book)=> {
        return (
         <div>
          <p>{book.title}</p>
          <p>{book.year}</p>
         {/* <img src={book.imageLink} alt="" width={150}/> */}
         <Link to={`/admin/book-Lists/${book.id}`}> Read more </Link>
       
         </div>
        )
      })}
      
      </div>
  )
}

export default BookLists