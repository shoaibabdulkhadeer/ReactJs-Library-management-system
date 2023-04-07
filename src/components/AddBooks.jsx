import React, { useRef } from 'react'
import '../styles/Addbooks.css'
import {useNavigate} from 'react-router-dom'

const AddBooks = () => {

 let title = useRef(null)
 let author = useRef(null)
 let Genre = useRef(null)
 let imageLink = useRef(null)
 let pages = useRef(null)
 let year = useRef(null)
 let country = useRef(null)
 let language = useRef(null)


 let navigate = useNavigate()

 let submit = (e) => {
    e.preventDefault()
     let data = {
      title: title.current.value,
      author: author.current.value,
      Genre: Genre.current.value,
      imageLink: imageLink.current.value,
      pages: pages.current.value,
      year: year.current.value,
      country: country.current.value,
      language: language.current.value,

     }
     fetch("http://localhost:4000/books",{
      method:'POST',
      headers:{"Content-Type":'application/json'},
      body:JSON.stringify(data)
  })
    alert('Success');
    navigate("/admin/book-Lists")
  }

    
    return (
        <div className='addbooks'>
            <form onSubmit={submit} action=""  style={{marginLeft:"370px",marginTop:"20px"}} >
               <h1>Add Books</h1>
               <label >Book Title</label>
               <input ref={title} type="text" placeholder='Enter Book Title'/>

                <label>Author Name</label>
               <input ref={author} type="text" placeholder='Author Name' />

               <label > Genre </label>
               <input ref={Genre} type="text" placeholder='Genre' />

               <label> ThumbNail URL</label>
               <input ref={imageLink} type="text" placeholder='Thumbnail URL' />

               <label > Pages </label>
               <input ref={pages} type="text" placeholder='Pages' />

               
               <label > Year </label>
               <input ref={year} type="text" placeholder='Year' />

               <label > Country </label>
               <input ref={country} type="text" placeholder='Country' />

               <label > Language </label>
               <input ref={language} type="text" placeholder='Language' />
               
               {/* <label > Description </label>
               <input ref={description} type="text" placeholder='Description' /> */}

        
               <button>Add Book</button>
 
            </form>
        </div>
    )
}

export default AddBooks