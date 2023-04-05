import React from 'react'
import '../styles/Addbooks.css'

const AddBooks = () => {
    return (
        <div className='addbooks'>
            <form action=""  style={{marginLeft:"370px",marginTop:"20px"}}>
               <h1>Add Books</h1>
               <label >Book Title</label>
               <input type="text" placeholder='Enter Book Title'/>

                <label>Author Name</label>
               <input type="text" placeholder='Author Name' />

               <label > Genre </label>
               <input type="text" placeholder='Genre' />

               <label> ThumbNail URL</label>
               <input type="text" placeholder='Thumbnail URL' />

               <button>Add Book</button>
 
            </form>
        </div>
    )
}

export default AddBooks