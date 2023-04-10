import React, { useEffect, useState } from 'react'
import '../styles/BookLists.css'
import {  useNavigate} from 'react-router-dom'
import { RiVipCrownFill} from 'react-icons/ri';
import { RiShieldUserFill } from 'react-icons/ri';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';


const BookLists = () => {

  let location = useLocation()
  console.log(location.pathname)

  let navigate = useNavigate()

  const [books, setBooks] = useState([])

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/books")
      const data = await response.json()
      setBooks(data)
    }
    fetchData()


  }, [books])



  // let navigate = useNavigate()

  const Del = (id,title) => {
 
    alert( `Successfully deleted ${title} Book ` )
    fetch(`http://localhost:4000/books/${id}`,{
      method: 'DELETE'
    })
  }

  
  const readbookbtn = (id) => {
    if(location.pathname === '/admin/book-Lists'){
      navigate(`/admin/book-Lists/${id}`)
    }else{
         navigate(`/user/book-Lists/${id}`)
    }
  }


  return (
    <div className='BookLists'>
 
           {/* alert component */}
           {/* <ToastContainer limit={1} style={{width:"350px"}} /> */}

      {books.map((book) => {
        return (
          
          <div className='book' key={book.id}>



            <div className='hidehover'>            
                  <div className='stickerpara'> 
                  <p>
                  <RiVipCrownFill size={30} style={{margin:"5px"}}/>  View Book 
                    </p> 
                  </div>
            </div>
            
            <button onClick={() => readbookbtn(book.id)} className='readmorebtn'>
                 Read more
           </button>
        
            <img src={book.imageLink} alt="" width={180} />
            <div className='Details'>
              
            <h3 className='booktitle' style={{display:"flex",alignItems:"center",gap:"5px"}}><RiShieldUserFill /> {book.title}</h3>
            <p className='author'>{book.author}</p>
            <div className='bookpagesyear'>
              <div>
              <p>Pages - {book.pages}</p>
              <p> Year - {book.year}</p>

              </div>

              
           
              <div>
            {location.pathname === '/admin/book-Lists' &&  <button onClick={() => Del(book.id,book.title)} className='Delete'>Delete</button>}
              </div>

            </div>
           
            </div>
           

          </div>
      
        )
      })}

    </div>
  )
}

export default BookLists