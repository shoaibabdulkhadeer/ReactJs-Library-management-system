import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import axios from 'axios'
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
    },[])


  return (
    <div>
        <img src={book.imageLink} alt="" width={150}/>
      <h1>{book.title}</h1>
      <p>{book.description}</p>

      
    </div>
  )
}

export default ReadBook