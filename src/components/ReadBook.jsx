import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../styles/ReadBook.css"



const ReadBook = () => {

  const [book, setBook] = useState([])

  let params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/books/${params.id}`)
      const data = await response.json()

      setBook(data)
    }

    fetchData()
  }, [])


  return (
    <div className='Readbook'>
      <div className='boxshadow'>

       
   
      <div className='Bookdetails'>
        <img src={book.imageLink} alt="" width={150} />
        <div> 
          <h1>{book.title}</h1>
        <p >Author - {book.author}</p>
        <p> Language - {book.language}</p>
        <p>Pages - {book.pages}</p>
        <p>Country - {book.country}</p>
        <p> Year - {book.year}</p>

        </div>
       
      </div>


      <p className='bookdesc'>{book.description}</p>

      </div>
    </div>
  )
}

export default ReadBook